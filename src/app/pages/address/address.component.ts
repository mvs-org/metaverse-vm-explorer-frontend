import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Apollo, gql } from 'apollo-angular'
import { switchMap } from 'rxjs/operators'
import { TokenService } from '../../services/token.service'
import BN from 'bignumber.js'
import { AbiItem, Contract } from '../../interfaces/contract'
import Web3 from 'web3'
import { WorkBook, utils, WorkSheet, writeFile } from 'xlsx'

// Bignumber config
BN.config({ EXPONENTIAL_AT: 18 })

export interface LogValue {
  name: string
  value: string | { hex: string }
  type: string
  indexed: boolean
}

export interface DecodedLog {
  signature: string
  name: string
  values: LogValue[]
}

export interface Log {
  blockNumber: number
  blockHash: string
  transactionHash: string
  decoded?: DecodedLog
}
@Component({
  selector: 'ngx-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddressComponent implements OnInit {

  TAB_IDS = {
    LOGS: 'TAB_LOGS',
    TRANSACTIONS: 'TAB_TXS',
    MST_TRANSFERS: 'TAB_MST_TRANSFERS',
  }

  selectedTab = this.TAB_IDS.TRANSACTIONS
  price: any
  address: any
  lowercaseAddress: string = ''
  contract: Contract
  initialLoading = true
  error: any
  info: any
  mstBalances: any[] = []

  transactions = []
  loadingTxs = false

  mstTransfers = []
  loadingMstTxs = false

  logs: Log[]
  loadingLogs = false
  logTopicFilter = null

  callResults: { [name: string]: any[] } = {}

  constructor(
    private apollo: Apollo,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService,
  ) {
  }

  reset() {
    this.contract = undefined
    this.transactions = []
    this.initialLoading = true
    this.loadingTxs = false
    this.loadingLogs = false
    this.loadingMstTxs = false
    this.selectedTab = this.TAB_IDS.TRANSACTIONS
    this.mstBalances = []
    this.logTopicFilter = null
  }

  formatLogValue(value: any) {
    return value.value?.hex ? this.formatHexNumber(value.value.hex) : value.value
  }

  exportLogs() {
    const logData: { [name: string]: { name: string, data: any[] } } = {}
    for (const log of this.logs) {
      if (!log.decoded) {
        continue
      }
      if (logData[log.decoded.name] === undefined) {
        logData[log.decoded.name] = {
          name: log.decoded.name, data: [[
            'Tx',
            'Height',
            'Event Signature',
            ...log.decoded.values.map(value => value.name),
          ]]
        }
      }
      logData[log.decoded.name].data.push([
        log.transactionHash,
        log.blockNumber,
        log.decoded.signature,
        ...log.decoded.values.map(value => this.formatLogValue(value)),
      ])
    }
    const wb: WorkBook = utils.book_new()
    for (const logType of Object.values(logData)) {
      const ws: WorkSheet = utils.aoa_to_sheet(logType.data)
      this.autofitColumns(logType.data, ws)
      utils.book_append_sheet(wb, ws, logType.name)
    }
    writeFile(wb, `logs-${this.address.address}.xlsx`, { bookType: 'xlsx', type: 'array' })
  }

  private autofitColumns(json: any[], worksheet: WorkSheet) {
    const objectMaxLength: number[] = []
    json.map(jsonData => {
      Object.entries(jsonData)
        .map(([, v], idx) => {
          const columnValue = v as string
          objectMaxLength[idx] = objectMaxLength[idx] >= columnValue.length ? objectMaxLength[idx] : columnValue.length
        })
    })
    const wscols = objectMaxLength.map((w: number) => ({ width: w }))
    worksheet['!cols'] = wscols
  }

  formatHexNumber(hex: string) {
    return new BN(hex).toString(10)
  }

  async ngOnInit() {
    this.selectedTab = this.TAB_IDS.TRANSACTIONS
    this.activatedRoute.params
      .pipe(
        switchMap(params => {
          this.reset()
          return this.apollo
            .query<any>({
              variables: {
                address: params['address'],
              },
              query: gql`
          query($address: String!)
          {
            price{
              current_USD
            }
            address(address: $address) {
              etpBalance
              address
              transactions(limit: 25, sort: "desc") {
                hash
                from
                to
                value
                confirmedAt
                blockNumber
              }
              mstTransfers(limit: 25, sort: "desc") {
                transactionHash
                from
                to
                value
                blockNumber
                confirmedAt
                tokenInfo {
                  symbol
                  decimals
                }
              }
              msts {
                address
                symbol
                decimals
                logoURI
                name
              }
              contract {
                contractName
                logoURI
                source
                abi
                bytecode
                creationTransaction{
                  hash
                  from
                  confirmedAt
                }
              }
              logs {
                blockNumber
                blockHash
                transactionHash
                decoded {
                  signature
                  name
                  values
                }
              }
            }
          }
          `,
            })
        })
      ).subscribe(async response => {
        this.price = response.data?.price
        this.address = response.data?.address
        this.lowercaseAddress = this.address.address.toLowerCase()
        this.transactions = this.address.transactions
        this.mstTransfers = this.address.mstTransfers
        this.logs = this.address.logs
        if (response.data?.address.contract) {
          this.contract = {
            ...response.data?.address.contract,
            ...(response.data?.address.contract.abi && {
              abi: JSON.parse(response.data?.address.contract.abi).sort((a: AbiItem, b) => {
                if (a.stateMutability == b.stateMutability) {
                  return a.name >= b.name
                }
                return a.stateMutability < b.stateMutability
              })
            })
          }
        }
        this.mstBalances = await Promise.all(this.address.msts.map(async contract => {
          const balance = new BN(
            await this.tokenService.getMSTBalance(contract.address, this.address.address)
          ).shiftedBy(-contract.decimals)
          return {
            ...contract,
            balance,
          }
        }))
          .then(msts => msts.filter((mst: any) => mst.balance.gt(0)))
        this.initialLoading = response.loading
        this.error = response.error
      })
  }

  logFilterSelected(event: AbiItem) {
    const signature = `${event.name}(${event.inputs.map(input => input.type).join(',')})`
    this.logTopicFilter = Web3.utils.sha3(signature)
    this.logs = []
    this.loadMoreLogs()
  }

  onChangeTab(event: any) {
    this.selectedTab = event.tabId
  }

  scroll() {
    switch (this.selectedTab) {
      case this.TAB_IDS.TRANSACTIONS:
        return this.loadMoreTransactions()
      case this.TAB_IDS.LOGS:
        return this.loadMoreLogs()
      case this.TAB_IDS.MST_TRANSFERS:
        return this.loadMoreMstTransfers()
    }
  }

  async loadMoreTransactions() {
    if (this.loadingTxs) return
    this.loadingTxs = true
    try {
      const response = await this.apollo
        .query<any>({
          variables: {
            address: this.address.address,
            startBlock: this.transactions[0] ? this.transactions[0].blockNumber + 0 : 0,
            offset: this.transactions.length,
          },
          query: gql`
      query($address: String, $startBlock: Int!, $offset: Int!)
      {
        txs(query:{address: $address, blockNumber_lte: $startBlock}, limit: 25, sort: "desc", offset: $offset) {
          hash
          from
          to
          value
          confirmedAt
        }
      }
      `,
        }).toPromise()
      this.transactions = this.transactions.concat(response.data?.txs)
      this.error = response.error
    } catch (error) {
      console.error(error)
    }
    this.loadingTxs = false
  }

  async loadMoreLogs() {
    if (this.loadingLogs) return
    this.loadingLogs = true
    try {
      const { data } = await this.apollo
        .query<any>({
          variables: {
            address: this.address.address,
            topic: this.logTopicFilter,
            startBlock: this.logs[0] ? this.logs[0].blockNumber + 0 : 0,
            offset: this.logs.length,
          },
          query: gql`
      query($address: String, $topic: String, $startBlock: Int!, $offset: Int!)
      {
        logs(address: $address, topic: $topic, query:{blockNumber_lte: $startBlock }, limit: 25, offset: $offset) {
          blockNumber
          blockHash
          transactionHash
          decoded {
            signature
            name
            values
          }
        }
      }
      `,
        }).toPromise()
      this.logs = this.logs.concat(data?.logs)
    } catch (error) {
      console.error(error)
    }
    this.loadingLogs = false
  }

  async loadMoreMstTransfers() {
    if (this.loadingMstTxs) return
    this.loadingMstTxs = true
    try {
      const { data } = await this.apollo
        .query<any>({
          variables: {
            address: this.address.address,
            startBlock: this.mstTransfers[0] ? this.mstTransfers[0].blockNumber + 0 : 0,
            offset: this.mstTransfers.length
          },
          query: gql`
      query($address: String, $startBlock: Int!, $offset: Int!)
      {
        mstTransfers(query:{address: $address, blockNumber_lte: $startBlock}, limit: 25, sort: "desc", offset: $offset) {
          transactionHash
          from
          to
          value
          blockNumber
          confirmedAt
          tokenInfo {
            symbol
            decimals
          }
        }
      }
      `,
        }).toPromise()
      this.mstTransfers = this.mstTransfers.concat(data?.mstTransfers)
    } catch (error) {
      console.error(error)
    }
    this.loadingMstTxs = false
  }

}

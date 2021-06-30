import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Apollo, gql } from 'apollo-angular'
import { switchMap } from 'rxjs/operators'
import { TokenService } from '../../services/token.service'
import BN from 'bignumber.js'
import { AbiItem, Contract } from '../../interfaces/contract'
import Web3 from 'web3'
@Component({
  selector: 'ngx-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddressComponent implements OnInit {

  price: any
  address: any
  lowercaseAddress: string = ''
  transactions = []
  contract: Contract
  mstTransfers = []
  initialLoading = true
  loadingTxs = false
  loadingMstTxs = false
  error: any
  info: any
  selectedTab: string
  tabsTitles = [
    'Transactions',
    'MST Transfers',
  ]
  mstBalances: any[] = []

  logs: any[]
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
    this.selectedTab = undefined
    this.mstBalances = []
  }

  formatHexNumber(hex: string) {
    return new BN(hex).toString()
  }

  async ngOnInit() {
    this.selectedTab = this.tabsTitles[0]
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
              abi: JSON.parse(response.data?.address.contract.abi).sort((a, b) => {
                if (a.stateMutability == b.stateMutability) {
                  return a.name >= b.name
                }
                return a.stateMutability < b.stateMutability
              })
            })
          }
          console.log(this.contract)
        }
        this.mstBalances = await Promise.all(this.address.msts.map(async contract => {
          const balance = new BN(await this.tokenService.getMSTBalance(contract.address, this.address.address)).shiftedBy(-contract.decimals)
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

  onChangeTab(event) {
    this.selectedTab = event.tabTitle
  }

  scrollLogs() {
    if (this.selectedTab == 'Log') {
      this.loadMoreLogs()
    }
  }

  scrollTx() {
    if (this.selectedTab == 'Transactions') {
      this.loadMoreTransactions()
    }
  }

  scrollMst() {
    if (this.selectedTab == 'MST Transfers') {
      this.loadMoreMstTransfers()
    }
  }

  loadMoreTransactions() {
    this.loadingTxs = true
    this.apollo
      .query<any>({
        variables: {
          address: this.address.address,
          startBlock: this.transactions[0] ? this.transactions[0].blockNumber + 0 : 0,
          offset: this.transactions.length
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
      }).subscribe((response) => {
        this.transactions = this.transactions.concat(response.data?.txs)
        this.loadingTxs = response.loading
        this.error = response.error
      })
  }

  loadMoreLogs() {
    this.loadingLogs = true
    this.apollo
      .query<any>({
        variables: {
          address: this.address.address,
          topic: this.logTopicFilter,
          startBlock: this.logs[0] ? this.logs[0].blockNumber + 0 : 0,
          offset: this.logs.length
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
      }).subscribe((response) => {
        this.logs = this.logs.concat(response.data?.logs)
        this.loadingLogs = response.loading
        this.error = response.error
      })
  }

  loadMoreMstTransfers() {
    this.loadingMstTxs = true
    this.apollo
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
      }).subscribe((response) => {
        this.mstTransfers = this.mstTransfers.concat(response.data?.mstTransfers)
        this.loadingMstTxs = response.loading
        this.error = response.error
      })
  }

}

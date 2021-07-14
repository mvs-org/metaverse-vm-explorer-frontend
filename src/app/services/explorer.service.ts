import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { of } from 'rxjs'
import txQuery from '../graphql/tx.gql'
import { getTx } from '../../graphql/__generated__/getTx'

const dappList = require('../../assets/dapps/dapp-list.json')
export interface InfoData {
  price: {
    current_USD: number
    change7d_USD: number
    change24h_USD: number
    low24h_USD: number
    high_USD: number,
  }
  blocks: {
    hash: string
    number: number
    timestamp: number,
  }[]
  txs: {
    hash: string
    blockNumber: number
    from: string
    to: string
    confirmedAt: number,
  }[]
}

@Injectable({
  providedIn: 'root',
})
export class ExplorerService {

  constructor(
    private apollo: Apollo,
  ) { }

  info() {
    return this.apollo
      .watchQuery<InfoData>({
        pollInterval: 10000,
        query: gql`
      {
        price{
          current_USD
          change7d_USD
          change24h_USD
          low24h_USD
          high_USD
        }
        blocks(query:{}, limit: 10, sort: "desc") {
          hash
          number
          timestamp
        }
        txs(query:{}, limit: 10, sort: "desc") {
          hash
          blockNumber
          from
          to
          confirmedAt
        }
      }
    `,
      }).valueChanges
  }

  tx(hash: string) {
    return this.apollo
          .query<getTx>({
            variables: {
              hash,
            },
            query: txQuery,
          })
  }

  dapps() {
    return of(dappList)
  }
}

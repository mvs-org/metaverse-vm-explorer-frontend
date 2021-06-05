import { Component, OnInit } from '@angular/core'
import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag'

@Component({
  selector: 'ngx-contracts',
  templateUrl: './msts.component.html',
  styleUrls: ['./msts.component.scss']
})
export class MSTsComponent implements OnInit {

  loading = true
  msts: any[]
  error: any

  pairs: any[]

  constructor(private apollo: Apollo) { }

  async ngOnInit() {
    this.loadMSTs()
    this.loadPairs()
  }

  async loadMSTs(){
    const { data, loading, error } = await this.apollo
    .query<any>({
      query: gql`
      {
        msts {
          symbol
          name
          decimals
          logoURI
          address
        }
      }
    `,
    }).toPromise()
  this.msts = data?.msts
  this.loading = loading
  this.error = error
  }

  async loadPairs() {
    const { data, loading, error } = await this.apollo.use('genefinance')
      .query<any>({
        query: gql`
{
  pairs(where: {volumeUSD_gt:0}){
    token0{
      symbol
    }
    token1{
      symbol
    }
    token0Price
    token1Price
    reserveUSD
    reserve1
    pairHourData(orderBy:hourStartUnix orderDirection:desc first: 24){
      hourStartUnix
      reserveUSD
      hourlyVolumeUSD
      hourlyTxns
      hourlyVolumeToken0
      hourlyVolumeToken1
    }
  }
}
      `
      }).toPromise()
    this.pairs = data?.pairs.map((pair:any)=>({
      ...pair,
      volumeUSD24h: pair.pairHourData.reduce((acc, cur)=>acc+Number(cur.hourlyVolumeUSD), 0),
      txs24h: pair.pairHourData.reduce((acc, cur)=>acc+Number(cur.hourlyTxns), 0),
    }))
  }

}

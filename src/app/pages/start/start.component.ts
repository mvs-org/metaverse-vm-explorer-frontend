import { Component, OnInit } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'

@Component({
  selector: 'ngx-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  blocks: any[]
  loadingBlocks = true
  errorBlocks: any

  txs: any[]
  loadingTxs = true
  errorTxs: any

  constructor(private apollo: Apollo) { }

  async ngOnInit() {
    this.loadBlocks()
    this.loadTxs()
  }

  async loadBlocks() {
    const { data, loading, error } = await this.apollo
    .query<any>({
      query: gql`
        {
          blocks(query:{}, limit: 10) {
            hash
            number
            timestamp
          }
        }
      `,
    }).toPromise()
    this.blocks = data?.blocks
    this.loadingBlocks = loading
    this.errorBlocks = error
  }

  async loadTxs() {
    const { data, loading, error } = await this.apollo
      .query<any>({
        query: gql`
          {
            txs(query:{}, limit: 10) {
              hash
              blockNumber
            }
          }
        `,
      }).toPromise()
    this.txs = data?.txs
    this.loadingTxs = loading
    this.errorTxs = error
  }

}

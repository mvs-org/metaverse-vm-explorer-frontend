import { Component, OnInit } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'

@Component({
  selector: 'ngx-txs',
  templateUrl: './txs.component.html',
  styleUrls: ['./txs.component.scss']
})
export class TxsComponent implements OnInit {

  txs: any[] = []
  initialLoading = true
  loading = true
  error: any
  currentTimestamp

  constructor(private apollo: Apollo) { }

  async ngOnInit() {

    this.loadTxs()

  }

  onScroll() {
    this.loadTxs()
  }

  loadTxs() {
    this.loading = true
    this.apollo
    .query<any>({
      variables: {
        startBlock: this.txs[0] ? this.txs[0].blockNumber : 0,
        offset: this.txs.length
      },
      query: gql`
      query($startBlock: Int!, $offset: Int!)
        {
          txs(query:{blockNumber_lte: $startBlock}, limit: 100, sort: "desc", offset: $offset) {
            hash
            confirmedAt
            from
            to
            blockNumber
          }
        }
      `,
    }).subscribe((response)=>{
      this.currentTimestamp = Math.floor(Date.now()/1000);
      this.txs = this.txs.concat(response.data?.txs)
      this.loading = response.loading
      this.initialLoading = false
      this.error = response.error
    })
  }

}

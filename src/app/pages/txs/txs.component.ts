import { Component, OnInit } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'

@Component({
  selector: 'ngx-blocks',
  templateUrl: './txs.component.html',
  styleUrls: ['./txs.component.scss']
})
export class TxsComponent implements OnInit {

  txs: any[]
  loading = true
  error: any

  constructor(private apollo: Apollo) { }

  async ngOnInit() {
    const { data, loading, error } = await this.apollo
      .query<any>({
        query: gql`
          {
            txs(query:{}, limit: 50) {
              hash
              blockNumber
            }
          }
        `,
      }).toPromise()
    this.txs = data?.txs
    this.loading = loading
    this.error = error
  }

}

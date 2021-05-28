import { Component, OnInit } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'

@Component({
  selector: 'ngx-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  price:any
  blocks: any[]
  loading = true
  error: any

  txs: any[]

  constructor(private apollo: Apollo) { }

  async ngOnInit() {
    this.apollo
    .watchQuery<any>({
      pollInterval: 10000,
      query: gql`
        {
          price{
            current_USD
            change1h_USD
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
          }
        }
      `,
    }).valueChanges.subscribe((response)=>{
      console.log(response)
      this.price = response.data?.price
      this.blocks = response.data?.blocks
      this.txs = response.data?.txs
      this.loading = response.loading
      this.error = response.error
    })
  }

}

import { Component, OnInit } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'

@Component({
  selector: 'ngx-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  blocks: any[]
  loading = true
  error: any

  constructor(private apollo: Apollo) { }

  async ngOnInit() {
    const { data, loading, error } = await this.apollo
      .query<any>({
        query: gql`
        {
          blocks(query:{}, limit: 50, sort: "desc") {
            hash
            number
            timestamp
          }
        }
      `,
    }).toPromise()
    this.blocks = data?.blocks
    this.loading = loading
    this.error = error
  }

}

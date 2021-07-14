import { Component, OnInit } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'

@Component({
  selector: 'ngx-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss'],
})
export class BlocksComponent implements OnInit {

  blocks: any[] = []
  initialLoading = true
  loading = true
  error: any

  constructor(private apollo: Apollo) { }

  async ngOnInit() {
    this.loadBlocks()
  }

  loadBlocks() {
    this.loading = true
    this.apollo
    .query<any>({
      variables: {
        startBlock: this.blocks[0] ? this.blocks[0].number : 0,
        offset: this.blocks.length,
      },
      query: gql`
      query($startBlock: Int!, $offset: Int!)
      {
        blocks(query:{number_lte: $startBlock}, limit: 100, sort: "desc", offset: $offset) {
          hash
          number
          timestamp
          transactionCount
        }
      }
      `,
    }).subscribe((response) => {
      this.blocks = this.blocks.concat(response.data?.blocks)
      this.loading = response.loading
      this.initialLoading = false
      this.error = response.error
    })
  }

}

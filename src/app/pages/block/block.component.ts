import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Apollo, gql } from 'apollo-angular'
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'ngx-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  block: any
  loading = true
  error: any
  hash: String
  currentTimestamp

  constructor(
    private apollo: Apollo,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  async ngOnInit() {
    this.currentTimestamp = Math.floor(Date.now()/1000);
    this.activatedRoute.params
      .pipe(
        switchMap(params => this.apollo.query<any>(
          {
            variables: {
              id: params['id'].length > 60 ? params['id'] : parseInt(params['id']),
            },
            query: params['id'].length > 60 ? this.blockByHashQuery : this.blockByNumberQuery,
          }))
      ).subscribe(response => {
        this.block = response.data?.block || response.data?.blockByNumber
        this.loading = response.loading
        this.error = response.error
      })
  }

  blockByNumberQuery = gql`
    query($id: Int!)
    {
        blockByNumber(number: $id){
          hash
          number
    parentHash
    size
    timestamp
    miner
    gasUsed
        }
    }`

  blockByHashQuery = gql`
  query($id: ID!)
            {
              block(id: $id) {
                hash
                number
    parentHash
    size
    timestamp
    miner
    gasUsed
              }
            }
`

}

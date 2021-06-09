import { Component, OnDestroy, OnInit } from '@angular/core'
import { HttpLink, InMemoryCache } from '@apollo/client/core'
import { Apollo, gql } from 'apollo-angular'
import { switchMap } from 'rxjs/operators'
import { Metadata, TokenService } from '../../services/token.service'

@Component({
  selector: 'ngx-mits',
  templateUrl: './mits.component.html',
  styleUrls: ['./mits.component.scss']
})
export class MITsComponent implements OnInit {

  tokens: any[] = []
  initialLoading = true
  loading = true

  skip=0

  constructor(private apollo: Apollo, private tokenService: TokenService) { }

  async ngOnInit() {
    this.loadTxs()
  }

  loadTxs() {
    this.loading = true

    console.log(this.skip)
    this.apollo.use('opennft')
      .query<any>({
        variables: {
          offset: this.skip || 0
        },
        query: gql`
      query($offset: Int!)
      {
  fungibleTokens(where:{totalSupply_gt: 0}, first: 24, skip: $offset){
    id
    tokenUri
    totalListed
    tokenId
    project{
      symbol
      totalSupply
    }
    owners{
      id
    }
    totalSupply
  }
}
      `,
      })
      .pipe(
        switchMap((result: any) => {
          return Promise.all(result.data.fungibleTokens.map(token => this.tokenService.getMetadata(token.tokenUri, token).toPromise()))
        })
      )
      .subscribe((tokens) => {
        if(tokens && tokens.length){
          this.skip+=tokens.length
        }
        this.tokens = this.tokens.concat(tokens.filter((t: Metadata) => t.image))
        this.initialLoading = false
      })
  }

}

import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Apollo, gql } from 'apollo-angular'
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'ngx-tx',
  templateUrl: './tx.component.html',
  styleUrls: ['./tx.component.scss']
})
export class TxComponent implements OnInit {

  price: any
  tx: any
  loading = true
  error: any
  hash: String

  showInputData = false

  constructor(
    private apollo: Apollo,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  async ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(params => this.apollo
          .query<any>({
            variables: {
              hash: params['hash'],
            },
            query: gql`
          query($hash: ID!)
            {
              price{
                current_USD
              }
              tx(id: $hash) {
                hash
                blockNumber
                blockHash
                from
                to
                input
                confirmedAt
                creates
                value
                raw
                receipt{
                  status
                  gasUsed
                  logs{
                    address
                    data
                    topics
                    decoded{
                      name
                      signature
                      values
                    }
                  }
                }
                gasPrice
                gas
                decoded{
                  name
                  arguments
                  signature
                }
              }
            }
          `,
          }))
      ).subscribe(response => {
        this.price = response.data?.price
        this.tx = response.data?.tx
        this.loading = response.loading
        this.error = response.error
      })
  }

}

import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Apollo, gql } from 'apollo-angular'
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'ngx-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  price: any
  address: String
  loading = true
  error: any
  info: any

  constructor(
    private apollo: Apollo,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  async ngOnInit() {
    this.loading = false
    this.activatedRoute.params.subscribe(({ address }: { address: string }) => {
      this.address = address
    })
    /*this.activatedRoute.params
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
                gasPrice
                gas
              }
            }
          `,
          }))
      ).subscribe(response => {
        this.price = response.data?.price
        this.tx = response.data?.tx
        this.loading = response.loading
        this.error = response.error
      })*/
  }

}

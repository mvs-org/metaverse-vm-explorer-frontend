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
  address: any
  loading = true
  error: any
  info: any

  constructor(
    private apollo: Apollo,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  async ngOnInit() {
    /*this.loading = false
    this.activatedRoute.params.subscribe(({ address }: { address: string }) => {
      this.address = address
    })*/
    this.activatedRoute.params
      .pipe(
        switchMap(params => this.apollo
          .query<any>({
            variables: {
              address: params['address'],
            },
            query: gql`
          query($address: String)
          {
            price{
              current_USD
            }
            address(address: $address) {
              etpBalance
              address
              transactions(limit: 25, sort: "desc") {
                hash
                from
                to
                value
                confirmedAt
              }
              mstTransfers(limit: 25, sort: "desc") {
                transactionHash
                from
                to
                value
                tokenInfo {
                  symbol
                  decimals
                }
              }
            }
          }
          `,
          }))
      ).subscribe(response => {
        console.log(response)
        this.price = response.data?.price
        this.address = response.data?.address
        this.loading = response.loading
        this.error = response.error
      })
  }

}

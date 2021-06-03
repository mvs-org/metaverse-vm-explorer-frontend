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
  mstTransfers = []
  loading = true
  error: any
  info: any
  selectedTab: string
  tabsTitles = [
    'Transactions',
    'MST Transfers',
  ]

  constructor(
    private apollo: Apollo,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  async ngOnInit() {
    this.selectedTab = this.tabsTitles[0]
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
                blockNumber
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
        this.mstTransfers = this.address.mstTransfers
        this.loading = response.loading
        this.error = response.error
      })
  }

  onChangeTab(event) {
    this.selectedTab = event.tabTitle
  }

  scrollTx() {
    if(this.selectedTab == 'Transactions') {
      //TODO
    }
  }

  scrollMst() {
    if(this.selectedTab == 'MST Transfers') {
      this.loadMoreMstTransfers()
    }
  }

  loadMoreMstTransfers() {
    this.apollo
    .query<any>({
      variables: {
        address: this.address.address,
        startBlock: this.mstTransfers[0] ? this.mstTransfers[0].blockNumber + 0 : 0,
        offset: this.mstTransfers.length
      },
      query: gql`
      query($address: String, $startBlock: Int!, $offset: Int!)
      {
        mstTransfers(query:{address: $address, blockNumber_lte: $startBlock}, limit: 25, sort: "desc", offset: $offset) {
          transactionHash
          from
          to
          value
          blockNumber
          tokenInfo {
            symbol
            decimals
          }
        }
      }
      `,
    }).subscribe((response)=>{
      console.log(response)
      this.mstTransfers = this.mstTransfers.concat(response.data?.mstTransfers)
      //this.loading = response.loading
      this.error = response.error
    })
  }

  loadTransactions() {
    //TODO
  }

}

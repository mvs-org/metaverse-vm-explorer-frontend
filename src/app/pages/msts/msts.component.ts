import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag'

@Component({
  selector: 'ngx-contracts',
  templateUrl: './msts.component.html',
  styleUrls: ['./msts.component.scss']
})
export class MSTsComponent implements OnInit {

  loading = true
  msts: any[]
  error: any

  constructor(private apollo: Apollo) { }

  async ngOnInit() {
    const { data, loading, error } = await this.apollo
      .query<any>({
        query: gql`
        {
          msts {
            symbol
            name
            decimals
            logoURI
            address
          }
        }
      `,
    }).toPromise()
    this.msts = data?.msts
    this.loading = loading
    this.error = error
  }

}

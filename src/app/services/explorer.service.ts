import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { of } from 'rxjs'

import txQuery from '../graphql/getTx.graphql'
import { getTx } from '../../graphql/__generated__/getTx'

import startpageQuery from '../graphql/startpageQuery.graphql'
import { StartpageInfo } from '../../graphql/__generated__/StartpageInfo'

const dappList = require('../../assets/dapps/dapp-list.json')
@Injectable({
  providedIn: 'root',
})
export class ExplorerService {

  constructor(
    private apollo: Apollo,
  ) { }

  info() {
    return this.apollo
      .watchQuery<StartpageInfo>({
        pollInterval: 10000,
        query: startpageQuery,
      }).valueChanges
  }

  tx(hash: string) {
    return this.apollo
      .query<getTx>({
        variables: {
          hash,
        },
        query: txQuery,
      })
  }

  dapps() {
    return of(dappList)
  }

}

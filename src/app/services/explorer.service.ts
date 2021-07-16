import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { of, merge } from 'rxjs'
import { map } from 'rxjs/operators'

import txQuery from '../graphql/getTx.graphql'
import { getTx } from '../graphql/__generated__/getTx'

import startpageQuery from '../graphql/startpageInfo.graphql'
import { StartpageInfo } from '../graphql/__generated__/StartpageInfo'
import { LanguageService } from './language.service'
import { TranslateService } from '@ngx-translate/core'

const dappListEn = require('../../assets/dapps/dapp-list-en.json')
const dappListZh = require('../../assets/dapps/dapp-list-zh.json')

@Injectable({
  providedIn: 'root',
})
export class ExplorerService {

  constructor(
    private apollo: Apollo,
    public languageService: LanguageService,
    private translateService: TranslateService,
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

  dapps$ = merge(
    of({ lang: this.translateService.currentLang }),
    this.translateService.onLangChange,
  )
    .pipe(
      map(changeEvent => changeEvent.lang === 'zh' ? dappListZh : dappListEn),
    )

}

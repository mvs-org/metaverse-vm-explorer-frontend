import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map, startWith } from 'rxjs/operators'
import { NetworkService } from '../services/network.service'
import { TranslateService } from '@ngx-translate/core'

import { combineLatest } from 'rxjs'
import { MENU_ITEMS_EN } from './pages-menu'
import { MENU_ITEMS_ZH } from './pages-menu'
import { MENU_ITEM_MITS_EN } from './pages-menu'
import { MENU_ITEM_MITS_ZH } from './pages-menu'
import { environment } from './../../environments/environment'

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu *ngIf="network$ | async" [items]="menu$ | async"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  network$ = this.networkService.network$

  constructor(
    activatedRoute: ActivatedRoute,
    private networkService: NetworkService,
    private translateService: TranslateService,
  ) {
    activatedRoute.params.subscribe(({ network }: { network: string }) => {
      console.log('set network to', network)
      networkService.setNetwork(network)
    })
    this.networkService.network$.subscribe(network => {
      console.log('network updated to ', network)
    })
  }

  menu$ = combineLatest(
    this.translateService.onLangChange,
    this.networkService.network$,
  )
    .pipe(
      startWith([{lang: this.translateService.defaultLang}, this.networkService.defaultNetwork]),
      map(([langChange, network]: [{lang: string}, string]) => {
        const menu = langChange?.lang === 'zh' ? MENU_ITEMS_ZH : MENU_ITEMS_EN
        if(environment.showMits) {
          menu.push(langChange?.lang === 'zh' ? MENU_ITEM_MITS_ZH : MENU_ITEM_MITS_EN)
        }
      return menu.map(item => ({
      ...item,
      link: '/' + network + item.link,
    })
    )
  }))
}

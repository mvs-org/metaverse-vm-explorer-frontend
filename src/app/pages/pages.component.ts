import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs/operators'
import { NetworkService } from '../services/network.service'

import { MENU_ITEMS } from './pages-menu'

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
export class PagesComponent implements OnInit {

  network$ = this.networkService.network$

  constructor(private activatedRoute: ActivatedRoute, private networkService: NetworkService) {
    activatedRoute.params.subscribe(({ network }: { network: string }) => {
      console.log('set network to', network)
      networkService.setNetwork(network)
    })
    this.networkService.network$.subscribe(network=>{
      console.log('network updated to ', network)
    })
  }

  ngOnInit(){

  }

  menu = MENU_ITEMS;

  menu$ = this.networkService.network$
    .pipe(map(network => this.menu.map(item => ({
      ...item,
      link: '/' + network + item.link
    }))))
}

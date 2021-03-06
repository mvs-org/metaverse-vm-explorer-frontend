import { Component, OnDestroy, OnInit } from '@angular/core'
import { NbMediaBreakpointsService, NbMenuService, NbSearchService, NbSidebarService, NbThemeService } from '@nebular/theme'

import { LayoutService } from '../../../@core/utils'
import { filter, map, switchMap, takeUntil } from 'rxjs/operators'
import { Subject, Observable } from 'rxjs'
import { RippleService } from '../../../@core/utils/ripple.service'
import { NetworkService } from '../../../services/network.service'
import { Router } from '@angular/router'
import { environment } from './../../../../environments/environment'

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>()
  public readonly materialTheme$: Observable<boolean>
  userPictureOnly: boolean = false
  user: any

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
    {
      value: 'material-light',
      name: 'Material Light',
    },
    {
      value: 'material-dark',
      name: 'Material Dark',
    },
  ]

  currentTheme = localStorage.getItem('theme') || 'material-dark'

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }]

  environment = environment

  public constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private rippleService: RippleService,
    public networkService: NetworkService,
    private searchService: NbSearchService,
    private router: Router,
  ) {

    this.materialTheme$ = this.themeService.onThemeChange()
      .pipe(map(theme => {
        const themeName: string = theme?.name || ''
        return themeName.startsWith('material')
      }))
  }

  ngOnInit() {
    this.searchService.onSearchSubmit().subscribe(({ term }) => {
      if (term.length == 42) {
        this.router.navigate(['/', this.networkService.network$.value, 'address', term])
      }
      if (term.length == 66) {
        this.router.navigate(['/', this.networkService.network$.value, 'tx', term])
      }
      if (term.length < 12 && !isNaN(Number(term))) {
        this.router.navigate(['/', this.networkService.network$.value, 'block', term])
      }
    })

    const { xl } = this.breakpointService.getBreakpointsMap()
    this.menuService.onItemSelect()
      .pipe(
        switchMap(() => this.themeService.onMediaQueryChange()),
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
      )
      .subscribe((shouldCollapse) => {
        if (shouldCollapse) {
          this.sidebarService.collapse('menu-sidebar')
        } else {
          this.sidebarService.compact('menu-sidebar')
        }
      })

    this.changeTheme(this.currentTheme)

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => {
        this.currentTheme = themeName
        this.rippleService.toggle(themeName?.startsWith('material'))
      })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  toggleTheme() {
    if (this.currentTheme === 'material-dark') {
      return this.changeTheme('material-light')
    }
    return this.changeTheme('material-dark')
  }

  changeTheme(themeName: string) {
    localStorage.setItem('theme', themeName)
    this.themeService.changeTheme(themeName)
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar')
    this.layoutService.changeLayoutSize()

    return false
  }

  navigateHome() {
    this.menuService.navigateHome()
    return false
  }

}

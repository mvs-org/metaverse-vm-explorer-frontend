import { ActivatedRoute, ExtraOptions, Router, RouterModule, RouterStateSnapshot, Routes } from '@angular/router'
import { Component, NgModule } from '@angular/core'


@Component({
  template: '',
})
export class RedirectComponent {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    router.navigate(['/mainnet', ...activatedRoute.snapshot.url.map(e => e.path)])
  }
}

const config: ExtraOptions = {
  useHash: false,
}

export const routes: Routes = [
  {
    path: 'mainnet',
    loadChildren: () => import('./pages/pages.module')
    .then(m => m.PagesModule),
  },
  {
    path: 'testnet',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  { path: '', redirectTo: 'mainnet', pathMatch: 'full' },
  { path: '**', component: RedirectComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

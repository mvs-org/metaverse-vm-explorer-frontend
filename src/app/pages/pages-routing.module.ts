import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

import { PagesComponent } from './pages.component'
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component'

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'start',
      loadChildren: () => import('./start/start.module')
        .then(m => m.StartModule),
    },
    {
      path: 'blocks',
      loadChildren: () => import('./blocks/blocks.module')
        .then(m => m.BlocksModule),
    },
    {
      path: 'block',
      loadChildren: () => import('./block/block.module')
        .then(m => m.BlockModule),
    },
    {
      path: 'txs',
      loadChildren: () => import('./txs/txs.module')
        .then(m => m.TxsModule),
    },
    {
      path: 'tx',
      loadChildren: () => import('./tx/tx.module')
        .then(m => m.TxModule),
    },
    {
      path: 'address',
      loadChildren: () => import('./address/address.module')
        .then(m => m.AddressModule),
    },
    {
      path: 'contracts',
      loadChildren: () => import('./contracts/contracts.module')
        .then(m => m.ContractsModule),
    },
    {
      path: 'msts',
      loadChildren: () => import('./msts/msts.module')
        .then(m => m.MSTsModule),
    },
    {
      path: 'mits',
      loadChildren: () => import('./mits/mits.module')
        .then(m => m.MITsModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'start',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

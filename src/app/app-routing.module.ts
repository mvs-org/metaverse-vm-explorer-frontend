import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./page/start/start.module').then(m => m.StartModule)},
  { path: 'address', loadChildren: () => import('./page/address/address.module').then(m => m.AddressModule) },
  { path: 'block', loadChildren: () => import('./page/block/block.module').then(m => m.BlockModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

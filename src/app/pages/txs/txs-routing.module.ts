import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { TxsComponent } from './txs.component'

const routes: Routes = [{
  path: '',
  component: TxsComponent,
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TxsRoutingModule { }

export const routedComponents = [
  TxsComponent,
]

import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { TxComponent } from './tx.component'

const routes: Routes = [{
  path: ':hash',
  component: TxComponent,
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TxRoutingModule { }

export const routedComponents = [
  TxComponent,
]

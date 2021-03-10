import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TxComponent } from './tx.component';

const routes: Routes = [{ path: ':hash', component: TxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TxRoutingModule { }

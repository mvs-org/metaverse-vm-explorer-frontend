import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxsRoutingModule, routedComponents } from './txs-routing.module'



@NgModule({
  imports: [
    CommonModule,
    TxsRoutingModule
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class TxsModule { }

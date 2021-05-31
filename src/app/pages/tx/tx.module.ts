import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxRoutingModule, routedComponents } from './tx-routing.module'

@NgModule({
  imports: [
    CommonModule,
    TxRoutingModule
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class TxModule { }

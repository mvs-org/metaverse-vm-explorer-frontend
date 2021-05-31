import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxsRoutingModule, routedComponents } from './txs-routing.module'
import { NbCardModule, NbListModule, NbIconModule } from '@nebular/theme'

@NgModule({
  imports: [
    CommonModule,
    TxsRoutingModule,
    NbCardModule,
    NbListModule,
    NbIconModule,

  ],
  declarations: [
    ...routedComponents,
  ],
})
export class TxsModule { }

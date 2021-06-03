import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxsRoutingModule, routedComponents } from './txs-routing.module'
import { NbCardModule, NbListModule, NbIconModule } from '@nebular/theme'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    TxsRoutingModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    InfiniteScrollModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class TxsModule { }

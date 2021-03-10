import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxRoutingModule } from './tx-routing.module';
import { TxComponent } from './tx.component';
import { TransactionDetailsComponent } from '../../components/transaction-details/transaction-details.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatDividerModule } from '@angular/material/divider'
import { MatCardModule } from '@angular/material/card'


@NgModule({
  declarations: [
    TxComponent,
    TransactionDetailsComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TxRoutingModule,
    MatCardModule,
    MatDividerModule,
  ]
})
export class TxModule { }

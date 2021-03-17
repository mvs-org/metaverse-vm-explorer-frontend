import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockRoutingModule } from './block-routing.module';
import { BlockComponent } from './block.component';
import { BlockDetailsComponent } from '../../components/block-details/block-details.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatDividerModule } from '@angular/material/divider'
import { MatCardModule } from '@angular/material/card'
import { TransactionListModule } from '../../components/transaction-list/transaction-list.module'

@NgModule({
  declarations: [
    BlockComponent,
    BlockDetailsComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDividerModule,
    TransactionListModule,
    MatCardModule,
    BlockRoutingModule,
  ]
})
export class BlockModule { }

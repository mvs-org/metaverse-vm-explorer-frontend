import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { SearchModule } from '../../components/search/search.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BlockListModule } from './block-list/block-list.module'
import { TransactionListModule } from './transaction-list/transaction-list.module'

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SearchModule,
    BlockListModule,
    TransactionListModule,
    StartRoutingModule,
  ]
})
export class StartModule { }

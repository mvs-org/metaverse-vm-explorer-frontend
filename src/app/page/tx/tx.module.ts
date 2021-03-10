import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxRoutingModule } from './tx-routing.module';
import { TxComponent } from './tx.component';


@NgModule({
  declarations: [TxComponent],
  imports: [
    CommonModule,
    TxRoutingModule
  ]
})
export class TxModule { }

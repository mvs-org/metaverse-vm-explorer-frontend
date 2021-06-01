import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxRoutingModule, routedComponents } from './tx-routing.module'
import { NbCardModule, NbListModule, NbIconModule } from '@nebular/theme'
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    PipesModule,
    TxRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class TxModule { }

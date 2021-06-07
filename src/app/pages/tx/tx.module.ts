import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxRoutingModule, routedComponents } from './tx-routing.module'
import { NbCardModule, NbListModule, NbIconModule, NbTabsetModule } from '@nebular/theme'
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    NbTabsetModule,
    PipesModule,
    TxRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class TxModule { }

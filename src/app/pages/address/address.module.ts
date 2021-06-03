import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressRoutingModule, routedComponents } from './address-routing.module'
import { NbCardModule, NbListModule, NbIconModule, NbTabsetModule, NbRouteTabsetModule } from '@nebular/theme'
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    PipesModule,
    AddressRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class AddressModule { }

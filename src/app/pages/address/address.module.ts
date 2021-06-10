import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressRoutingModule, routedComponents } from './address-routing.module'
import { NbCardModule, NbListModule, NbIconModule, NbTabsetModule, NbRouteTabsetModule } from '@nebular/theme'
import { PipesModule } from '../../pipes/pipes.module'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms'
import { ContractCallModule } from '../../components/contract-call/contract-call.module'
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode'

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    PipesModule,
    FormsModule,
    AddressRoutingModule,
    InfiniteScrollModule,
    ContractCallModule,
    NgxQRCodeModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class AddressModule { }

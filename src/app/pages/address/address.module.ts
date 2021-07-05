import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddressRoutingModule, routedComponents } from './address-routing.module'
import {
  NbCardModule,
  NbListModule,
  NbIconModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbBadgeModule,
  NbSelectModule,
  NbButtonModule,
} from '@nebular/theme'
import { PipesModule } from '../../pipes/pipes.module'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { FormsModule } from '@angular/forms'
import { ContractCallModule } from '../../components/contract-call/contract-call.module'
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbSelectModule,
    NbIconModule,
    NbButtonModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    PipesModule,
    FormsModule,
    TranslateModule.forChild(),
    AddressRoutingModule,
    InfiniteScrollModule,
    ContractCallModule,
    NgxQRCodeModule,
    NbBadgeModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class AddressModule { }

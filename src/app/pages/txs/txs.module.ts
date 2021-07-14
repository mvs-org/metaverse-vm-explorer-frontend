import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TxsRoutingModule, routedComponents } from './txs-routing.module'
import { NbCardModule, NbListModule, NbIconModule } from '@nebular/theme'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    CommonModule,
    TxsRoutingModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    InfiniteScrollModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class TxsModule { }

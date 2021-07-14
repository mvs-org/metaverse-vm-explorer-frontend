import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BlocksRoutingModule, routedComponents } from './blocks-routing.module'
import { NbCardModule, NbListModule } from '@nebular/theme'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    BlocksRoutingModule,
    InfiniteScrollModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class BlocksModule { }

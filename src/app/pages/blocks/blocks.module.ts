import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksRoutingModule, routedComponents } from './blocks-routing.module'
import { NbCardModule, NbListModule } from '@nebular/theme'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    BlocksRoutingModule,
    InfiniteScrollModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class BlocksModule { }

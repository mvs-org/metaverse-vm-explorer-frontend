import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MITsRoutingModule, routedComponents } from './mits-routing.module'
import { NbCardModule, NbListModule, NbIconModule } from '@nebular/theme'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { MitModule } from '../../components/mit/mit.module'

@NgModule({
  imports: [
    CommonModule,
    MITsRoutingModule,
    NbCardModule,
    MitModule,
    NbListModule,
    NbIconModule,
    InfiniteScrollModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class MITsModule { }

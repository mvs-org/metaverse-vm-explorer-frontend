import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksRoutingModule, routedComponents } from './blocks-routing.module'
import { NbCardModule, NbListModule } from '@nebular/theme'

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    BlocksRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class BlocksModule { }

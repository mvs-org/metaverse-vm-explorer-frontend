import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockRoutingModule, routedComponents } from './block-routing.module'

@NgModule({
  imports: [
    CommonModule,
    BlockRoutingModule
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class BlockModule { }

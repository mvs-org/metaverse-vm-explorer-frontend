import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockRoutingModule } from './block-routing.module';
import { BlockComponent } from './block.component';


@NgModule({
  declarations: [BlockComponent],
  imports: [
    CommonModule,
    BlockRoutingModule
  ]
})
export class BlockModule { }

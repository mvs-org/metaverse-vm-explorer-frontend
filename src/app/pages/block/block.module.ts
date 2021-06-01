import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockRoutingModule, routedComponents } from './block-routing.module'
import { NbCardModule, NbListModule, NbIconModule } from '@nebular/theme'
import { TimerModule } from '../components/timer/timer.module';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    TimerModule,
    BlockRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class BlockModule { }

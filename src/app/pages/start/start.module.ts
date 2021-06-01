import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRoutingModule, routedComponents } from './start-routing.module'
import { NbCardModule, NbListModule } from '@nebular/theme'
import { TimerModule } from '../components/timer/timer.module'

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    TimerModule,
    StartRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class StartModule { }

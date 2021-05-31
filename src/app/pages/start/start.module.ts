import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRoutingModule, routedComponents } from './start-routing.module'
import { NbCardModule, NbListModule } from '@nebular/theme'
import { TimerComponent } from '../components';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    StartRoutingModule,
  ],
  declarations: [
    TimerComponent,
    ...routedComponents,
  ],
})
export class StartModule { }

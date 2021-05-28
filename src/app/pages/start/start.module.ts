import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { StartRoutingModule, routedComponents } from './start-routing.module'
import { NbCardModule, NbListModule } from '@nebular/theme'



@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    StartRoutingModule
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class StartModule { }

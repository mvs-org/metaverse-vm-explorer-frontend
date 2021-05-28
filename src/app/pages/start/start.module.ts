import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { StartRoutingModule, routedComponents } from './start-routing.module'



@NgModule({
  imports: [
    CommonModule,
    StartRoutingModule
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class StartModule { }

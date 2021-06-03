import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MSTsRoutingModule, routedComponents } from './msts-routing.module'
import { NbCardModule, NbListModule } from '@nebular/theme'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    RouterModule,
    MSTsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class MSTsModule { }

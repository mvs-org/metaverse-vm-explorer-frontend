import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContractsRoutingModule, routedComponents } from './contracts-routing.module'

@NgModule({
  imports: [
    CommonModule,
    ContractsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ContractsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractCallComponent } from './contract-call.component';
import { FormsModule } from '@angular/forms'
import { NbButtonModule } from '@nebular/theme'



@NgModule({
  declarations: [
    ContractCallComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbButtonModule,
  ],
  exports: [
    ContractCallComponent,
  ]
})
export class ContractCallModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MitComponent } from './mit.component';
import { NbCardModule } from '@nebular/theme'



@NgModule({
  declarations: [
    MitComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
  ],
  exports:[
    MitComponent,
  ]
})
export class MitModule { }

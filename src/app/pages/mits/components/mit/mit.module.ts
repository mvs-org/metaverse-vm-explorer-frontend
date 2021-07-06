import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MitComponent } from './mit.component';
import { NbCardModule } from '@nebular/theme'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [
    MitComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    TranslateModule.forChild(),
  ],
  exports:[
    MitComponent,
  ]
})
export class MitModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContractCallComponent } from './contract-call.component'
import { FormsModule } from '@angular/forms'
import { NbButtonModule } from '@nebular/theme'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [
    ContractCallComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbButtonModule,
    TranslateModule.forChild(),
  ],
  exports: [
    ContractCallComponent,
  ],
})
export class ContractCallModule { }

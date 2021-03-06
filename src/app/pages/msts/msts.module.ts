import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MSTsRoutingModule, routedComponents } from './msts-routing.module'
import { NbCardModule, NbListModule } from '@nebular/theme'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    RouterModule,
    MSTsRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class MSTsModule { }

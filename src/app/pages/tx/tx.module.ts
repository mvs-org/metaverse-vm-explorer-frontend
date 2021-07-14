import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TxRoutingModule, routedComponents } from './tx-routing.module'
import { NbCardModule, NbListModule, NbIconModule, NbTabsetModule, NbButtonModule } from '@nebular/theme'
import { PipesModule } from '../../pipes/pipes.module'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    NbTabsetModule,
    NbButtonModule,
    PipesModule,
    TxRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class TxModule { }

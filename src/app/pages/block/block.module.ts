import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BlockRoutingModule, routedComponents } from './block-routing.module'
import { NbCardModule, NbListModule, NbIconModule } from '@nebular/theme'
import { TimerModule } from '../components/timer/timer.module'
import { PipesModule } from '../../pipes/pipes.module'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    TimerModule,
    PipesModule,
    BlockRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class BlockModule { }

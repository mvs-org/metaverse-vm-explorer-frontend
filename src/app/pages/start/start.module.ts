import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StartRoutingModule, routedComponents } from './start-routing.module'
import { NbCardModule, NbListModule, NbIconModule } from '@nebular/theme'
import { TimerModule } from '../components/timer/timer.module'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    TimerModule,
    StartRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class StartModule { }

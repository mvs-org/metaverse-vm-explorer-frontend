import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TimerComponent } from './timer.component'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    TimerComponent,
  ],
  exports: [
    TimerComponent,
  ],
})
export class TimerModule { }

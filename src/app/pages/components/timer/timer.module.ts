import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TimerComponent } from './timer.component'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TimerComponent,
  ],
  exports: [
    TimerComponent,
  ],
})
export class TimerModule { }

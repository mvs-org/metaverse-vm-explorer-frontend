import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'ngx-timer',
  styleUrls: ['./timer.component.scss'],
  templateUrl: './timer.component.html',
})


export class TimerComponent {
  @Input() time: number

  public constructor() {}

}

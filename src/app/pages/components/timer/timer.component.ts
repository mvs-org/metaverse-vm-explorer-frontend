import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-timer',
  styleUrls: ['./timer.component.scss'],
  templateUrl: './timer.component.html',
})


export class TimerComponent implements OnInit {
  @Input() time: number

  public constructor() {}
  ngOnInit() {}

}

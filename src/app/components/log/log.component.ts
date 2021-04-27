import { Component, Input, OnInit } from '@angular/core';

export interface Log {
  topics: string[]
  address: string
  data: string
  args?: {
    name: string
    type: string
    value: any
  }[]
  name?: string
  signature?: string
}

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  @Input() log: Log | undefined

  constructor() { }

  ngOnInit(): void {
  }

}

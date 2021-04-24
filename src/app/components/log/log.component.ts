import { Component, Input, OnInit } from '@angular/core';

export interface Log {
  id: string
  topics: string[]
  address: string
  data: string
  logIndex: number
  removed: false
  transactionHash: string
  transactionIndex: 0
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

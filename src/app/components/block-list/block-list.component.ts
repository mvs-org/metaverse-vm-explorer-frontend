import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss']
})
export class BlockListComponent implements OnInit {

  @Input() blocks: any[] = []

  displayedColumns = [
    'number',
    'hash',
    'time',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

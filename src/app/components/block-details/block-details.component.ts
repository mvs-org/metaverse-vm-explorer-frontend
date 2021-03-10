import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-details',
  templateUrl: './block-details.component.html',
  styleUrls: ['./block-details.component.scss']
})
export class BlockDetailsComponent implements OnInit {

  @Input() block: any = {}

  constructor() { }

  ngOnInit(): void {
  }

}

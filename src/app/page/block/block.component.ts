import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  block?: string

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe(async params=>{
      this.block = params.block
    })
  }

  ngOnInit(): void {
  }

}

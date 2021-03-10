import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {

  @Input() transaction: any = {}

  constructor() { }

  ngOnInit(): void {
  }

}

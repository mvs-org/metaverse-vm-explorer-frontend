import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  @Input() transactions: any[] | undefined

  displayedColumns = ['hash', 'from', 'to', 'value']

  constructor() { }

  ngOnInit(): void {
  }

}

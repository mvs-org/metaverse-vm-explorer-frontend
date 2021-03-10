import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ExplorerApiService } from '../../services/explorer-api.service'
import { map, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  address$ = this.activatedRoute.params
    .pipe(
      map(params=>params.address)
    )

  addressDetails$ = this.address$
      .pipe(
        switchMap( address => this.explorer.getAddressDetails(address) )
      )

  sentTransactions$ = this.address$
      .pipe(
        switchMap( address => this.explorer.listTransactionsFrom(address) )
      )

  receivedTransactions$ = this.address$
      .pipe(
        switchMap( address => this.explorer.listTransactionsTo(address) )
      )

      displayedColumns: string[] = [
        'to',
        'value',
        'status',
        'link',
      ];

      displayedColumnsReceived: string[] = [
        'from',
        'value',
        'status',
        'link',
      ];


  constructor(
    private activatedRoute: ActivatedRoute,
    private explorer: ExplorerApiService,
  ) { }

  ngOnInit(): void {
  }

}

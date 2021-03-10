import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ExplorerApiService } from '../../services/explorer-api.service'
import { map, switchMap } from 'rxjs/operators'
@Component({
  selector: 'app-tx',
  templateUrl: './tx.component.html',
  styleUrls: ['./tx.component.scss']
})
export class TxComponent implements OnInit {

  hash?: string
  hash$ = this.activatedRoute.params
    .pipe(
      map(params=>params.hash)
    )

    transaction$ = this.hash$
      .pipe(
        switchMap(hash=>this.explorerService.getTransaction(hash))
      )

  constructor(
    private activatedRoute: ActivatedRoute,
    private explorerService: ExplorerApiService,
  ) {
  }

  ngOnInit(): void {
  }

}

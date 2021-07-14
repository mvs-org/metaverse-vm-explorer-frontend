import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { switchMap } from 'rxjs/operators'
import { ExplorerService } from '../../services/explorer.service'
import { UtilityService } from '../../services/utility.service'

@Component({
  selector: 'ngx-tx',
  templateUrl: './tx.component.html',
  styleUrls: ['./tx.component.scss']
})
export class TxComponent implements OnInit {

  price: any
  tx: any
  loading = true
  error: any
  hash: String

  showInputData = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private utilityService: UtilityService,
    private explorerService: ExplorerService,
  ) {
  }

  async ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(params => this.explorerService.tx(params['hash'])),
      ).subscribe(response => {
        this.price = response.data?.price
        this.tx = response.data?.tx
        this.loading = response.loading
        this.error = response.error
      })
  }

  async copyHash(hash) {
    await this.utilityService.copy(hash, 'hash')
  }

}

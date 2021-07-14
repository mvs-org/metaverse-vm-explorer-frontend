import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { switchMap, map } from 'rxjs/operators'
import { ExplorerService } from '../../services/explorer.service'
import { UtilityService } from '../../services/utility.service'

@Component({
  selector: 'ngx-tx',
  templateUrl: './tx.component.html',
  styleUrls: ['./tx.component.scss'],
})
export class TxComponent {

  showInputData = false

  resolver$ = this.activatedRoute.params
    .pipe(
      switchMap(params => this.explorerService.tx(params['hash'])),
    )

  constructor(
    private activatedRoute: ActivatedRoute,
    private utilityService: UtilityService,
    private explorerService: ExplorerService,
  ) {
  }

  toNumber(input: string) {
    if (!input) return NaN
    if (input.trim().length === 0) {
      return NaN
    }
    return Number(input)
  }

  async copyHash(hash: string) {
    await this.utilityService.copy(hash, 'hash')
  }

}

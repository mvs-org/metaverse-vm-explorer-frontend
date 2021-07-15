import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { switchMap } from 'rxjs/operators'
import { ExplorerService } from '../../services/explorer.service'
import { UtilityService } from '../../services/utility.service'
import { TranslateService } from '@ngx-translate/core'

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
    private translate: TranslateService,
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
    this.translate.get(['TOAST.COPY.HASH']).subscribe(async (translations: any) => {
      await this.utilityService.copy(hash, translations['TOAST.COPY.HASH'], false)
    })
  }

}

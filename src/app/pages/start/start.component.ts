import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { ExplorerService } from '../../services/explorer.service'
const DappList = require('../../../assets/dapps/dapp-list.json')
@Component({
  selector: 'ngx-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit, OnDestroy {

  price: any
  blocks: any[]
  loading = true
  error: any

  txs: any[]

  dataSubscription: Subscription
  currentTimestamp

  dapps = DappList

  constructor(
    private explorer: ExplorerService,
  ) { }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe()
    }
  }

  async ngOnInit() {
    this.currentTimestamp = Math.floor(Date.now() / 1000)

    this.dataSubscription = this.explorer.info().subscribe((response) => {
        this.currentTimestamp = Math.floor(Date.now() / 1000)
        this.price = response.data?.price
        this.blocks = response.data?.blocks
        this.txs = response.data?.txs
        this.loading = response.loading
        this.error = response.error
      })
  }

}

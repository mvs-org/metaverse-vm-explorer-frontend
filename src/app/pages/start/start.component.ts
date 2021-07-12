import { Component, OnInit } from '@angular/core'
import { ExplorerService } from '../../services/explorer.service'

const DappList = require('../../../assets/dapps/dapp-list.json')
@Component({
  selector: 'ngx-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  currentTimestamp: number

  dapps = DappList

  infoData$ = this.explorer.info()

  constructor(
    private explorer: ExplorerService,
  ) { }

  async ngOnInit() {
    this.currentTimestamp = Math.floor(Date.now() / 1000)
  }

}

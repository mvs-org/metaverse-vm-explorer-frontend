import { Component } from '@angular/core'
import { map } from 'rxjs/operators'
import { ExplorerService } from '../../services/explorer.service'
import { environment } from './../../../environments/environment'

@Component({
  selector: 'ngx-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {

  currentTimestamp: number

  dapps$ = this.explorer.dapps$

  environment = environment

  infoData$ = this.explorer.info()
    .pipe(
      map(data => {
        this.currentTimestamp = Math.floor(Date.now() / 1000)
        return data
      }),
    )

  constructor(
    private explorer: ExplorerService,
  ) { }

}

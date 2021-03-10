import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { ExplorerApiService } from '../../services/explorer-api.service'

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  latestBlocks$ = timer(0, 5000)
    .pipe(
      switchMap(()=>this.explorerService.listBlocks())
    )


  constructor(
    private explorerService: ExplorerApiService,
  ) { }

  ngOnInit(): void {
  }

}

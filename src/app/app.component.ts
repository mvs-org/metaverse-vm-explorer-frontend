import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router'
import { ExplorerApiService } from './services/explorer-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'metaversevm-explorer';

  showTopbar = true

  constructor(
    public explorer: ExplorerApiService,
    public router: Router
  ){
  }

  ngOnInit(){
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        console.log(data.state.root)
        this.showTopbar = data.state.root?.firstChild?.data?.topbarSearch!==false;
      }
    });
  }
}

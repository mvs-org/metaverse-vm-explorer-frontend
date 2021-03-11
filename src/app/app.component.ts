import { SelectionChange } from '@angular/cdk/collections'
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
  selected = 'mainnet'

  constructor(
    public explorer: ExplorerApiService,
    public router: Router
  ){
  }

  setNetwork(event: any){
    this.explorer.setNetwork(event.value)
  }

  ngOnInit(){
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.showTopbar = data.state.root?.firstChild?.data?.topbarSearch!==false;
      }
    });
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  readonly defaultNetwork = 'mainnet'
  network: string
  network$ = new BehaviorSubject<string>(this.defaultNetwork)

  allowedNetworks = ['mainnet', 'testnet']

  constructor() { }

  setNetwork(network: string){
    if(this.allowedNetworks.indexOf(network)!==-1){
      this.network$.next(network)
      this.network = network
    }
  }

  switchNetwork(){
    if(this.network == 'mainnet'){
      this.setNetwork('testnet')
    } else {
      this.setNetwork('mainnet')
    }
  }
}

import { Injectable } from '@angular/core'
import Web3 from 'web3'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class BlockchainService {

  web3: Web3

  constructor() {
    this.web3 = new Web3(environment.rpc_url)
  }

  async call(abi: any, address: string, method: string, params: any[]) {
    const contract = new this.web3.eth.Contract(abi, address)
    return await contract.methods[method](...params).call()
  }

}

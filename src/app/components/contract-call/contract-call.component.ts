import { Component, Input, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { BlockchainService } from '../../services/blockchain.service'

@Component({
  selector: 'mvs-contract-call',
  templateUrl: './contract-call.component.html',
  styleUrls: ['./contract-call.component.scss']
})
export class ContractCallComponent implements OnInit {

  @Input()
  method: string

  @Input()
  address: string

  @Input()
  inputs: any[]

  @Input()
  stateMutability: string

  @Input()
  abi: any

  results: any[] = []

  constructor(
    private blockchainService: BlockchainService,
  ) { }

  ngOnInit(): void {
  }

  async call(e: NgForm) {
    const params = Object.values(e.value)
    let result
    try {
      result = await this.blockchainService.call(this.abi, this.address, this.method, params)
    } catch (error) {
      result = error.message
    }
    if(typeof result !== 'string'){
      result = JSON.stringify(result)
    }
    this.results = [result, ...this.results]
  }

}

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ExplorerApiService {

  network$ = new BehaviorSubject({ name: 'andromeda', label: 'Andromeda Testnet' })

  constructor(
    private http: HttpClient,
  ) { }

  private _apiUrl(): string {
    switch (this.network$.getValue().name) {
      case 'andromeda':
        return 'https://vm-explorer.mvs.org/api'
    }
    throw Error('unknown network')
  }

  getAddressDetails(address: string) {
    return this.http.get(`${this._apiUrl()}/address/${address}`)
      .pipe(
        map((response: any) => response.result)
      )
  }

  listTransactionsFrom(address: string) {
    return this.http.get(`${this._apiUrl()}/txs/from/${address}`)
      .pipe(
        map((response: any) => response.result)
      )
  }
  listTransactionsTo(address: string) {
    return this.http.get(`${this._apiUrl()}/txs/to/${address}`)
      .pipe(
        map((response: any) => response.result)
      )
  }

  listBlockTransactions(number: number) {
    return this.http.get(`${this._apiUrl()}/txs/block/${number}`)
      .pipe(
        map((response: any) => response.result)
      )
  }

  listBlocks() {
    return this.http.get(`${this._apiUrl()}/blocks`)
      .pipe(
        map((response: any) => response.result)
      )
  }

  getTransaction(hash: string) {
    return this.http.get(`${this._apiUrl()}/tx/${hash}`)
      .pipe(
        map((response: any) => response.result)
      )
  }

  getBlockByNumber(number: number) {
    return this.http.get(`${this._apiUrl()}/block/${number}`)
      .pipe(
        map((response: any) => response.result)
      )
  }

}

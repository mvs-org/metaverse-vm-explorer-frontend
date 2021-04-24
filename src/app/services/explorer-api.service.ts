import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, of, throwError } from 'rxjs'
import { catchError, map, retryWhen, share, switchMap, } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ExplorerApiService {

  networks = [
    {
      name: 'mainnet',
      label: 'Mainnet',
      url: 'https://vm-explorer.mvs.org/api/hyperspace'
    },
    {
      name: 'andromeda',
      label: 'Testnet',
      url: 'https://vm-explorer.mvs.org/api/andromeda'
    },
  ]

  network$ = new BehaviorSubject(this.networks[0])

  constructor(
    private http: HttpClient,
  ) { }

  private _apiUrl(): string {
    return this.network$.getValue().url
  }

  setNetwork(name: string) {
    switch (name) {
      case 'andromeda':
        this.network$.next(this.networks[1])
        break
      default:
        this.network$.next(this.networks[0])
    }
  }

  getAddressDetails(address: string) {
    return this.network$
      .pipe(
        switchMap(network => this.http.get(`${network.url}/address/${address}`)),
        map((response: any) => response.result),
      )
  }

  listTransactionsFrom(address: string) {
    return this.network$
      .pipe(
        switchMap(network => this.http.get(`${network.url}/txs/from/${address}`)),
        map((response: any) => response.result),
      )
  }
  listTransactionsTo(address: string) {
    return this.network$
      .pipe(
        switchMap(network => this.http.get(`${network.url}/txs/to/${address}`)),
        map((response: any) => response.result),
      )
  }

  listBlockTransactions(number: number) {
    return this.http.get(`${this._apiUrl()}/txs/block/${number}`)
      .pipe(
        map((response: any) => response.result)
      )
  }

  listBlocks() {
    return this.network$
      .pipe(
        switchMap(network => this.http.get(`${network.url}/blocks`)),
        map((response: any) => response.result),
        share()
      )
  }

  getTransaction(hash: string) {
    return this.network$
      .pipe(
        switchMap(
          network => this.http.get(`${network.url}/tx/${hash}`)
            .pipe(
              map((response: any) => response.result),
              catchError(err => {
                console.error('tx not found')
                return of(null)
              }),
            )
        ),
      )
  }

  getBlockByNumber(number: number) {
    return this.network$
      .pipe(
        switchMap(
          network => this.http.get(`${network.url}/block/${number}`)
            .pipe(
              map((response: any) => response.result),
              catchError(err => {
                console.error('block not found')
                return of(null)
              }),
            )
        ),
      )
  }

}

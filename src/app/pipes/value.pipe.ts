import { Pipe, PipeTransform } from '@angular/core'
import BN from 'bn.js'

@Pipe({
  name: 'formatValue'
})
export class ValuePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const decimals = Number(args[0]) | 0
    const symbol = args[1] ? ' ' + args[1] : ''
    return new BN(value).div(new BN(10 ** decimals)).toString() + symbol
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'decimals',
})
export class DecimalsPipe implements PipeTransform {
  transform(quantity: number, params: any) {
    const decimals = params[0]
    const maxDecimals = params[1]
    let number = (quantity / Math.pow(10, decimals))
    return maxDecimals ? number.toLocaleString(undefined, {maximumFractionDigits: maxDecimals}) : number
  }
}

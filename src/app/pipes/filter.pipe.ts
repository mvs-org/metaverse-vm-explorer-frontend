import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: { [key: string]: any }) {
    if (searchTerm) {
      return items.filter(item => {
        for (let key in searchTerm) {
          if(item[key] && item[key]===searchTerm[key]){
            return true
          }
          return false
        }
      })
    }
    else {
      return items
    }
  }
}

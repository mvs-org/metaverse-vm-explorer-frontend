import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DecimalsPipe } from './decimals.pipe'
import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [DecimalsPipe, FilterPipe],
  imports: [
    CommonModule,
  ],
  exports: [
    DecimalsPipe,
    FilterPipe,
  ],
})
export class PipesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalsPipe } from './decimals.pipe';

@NgModule({
  declarations: [DecimalsPipe],
  imports: [
    CommonModule
  ],
  exports: [
    DecimalsPipe,
  ]
})
export class PipesModule { }

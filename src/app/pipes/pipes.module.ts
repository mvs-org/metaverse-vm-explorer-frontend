import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuePipe } from './value.pipe';



@NgModule({
  declarations: [ValuePipe],
  imports: [
    CommonModule
  ],
  exports: [
    ValuePipe,
  ]
})
export class PipesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockListComponent } from './block-list.component'
import { MatTableModule } from '@angular/material/table'
import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [
    BlockListComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
  ],
  exports: [
    BlockListComponent,
  ]
})
export class BlockListModule { }

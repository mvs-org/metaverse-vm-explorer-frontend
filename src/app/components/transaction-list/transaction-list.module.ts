import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list.component'
import { MatTableModule } from '@angular/material/table'
import { RouterModule } from '@angular/router'
import { MatCardModule } from '@angular/material/card'



@NgModule({
  declarations: [
    TransactionListComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    MatCardModule,
  ],
  exports: [
    TransactionListComponent,
  ]
})
export class TransactionListModule { }

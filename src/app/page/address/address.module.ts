import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [AddressComponent],
  imports: [
    CommonModule,
    AddressRoutingModule,
    MatTableModule,
  ]
})
export class AddressModule { }

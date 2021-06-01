import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressComponent } from './address.component'

const routes: Routes = [{
  path: ':address',
  component: AddressComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressRoutingModule { }

export const routedComponents = [
  AddressComponent
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractsComponent } from './contracts.component'

const routes: Routes = [{
  path: '',
  component: ContractsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractsRoutingModule { }

export const routedComponents = [
  ContractsComponent
];

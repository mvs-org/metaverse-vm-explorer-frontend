import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MITsComponent } from './mits.component'

const routes: Routes = [{
  path: '',
  component: MITsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MITsRoutingModule { }

export const routedComponents = [
  MITsComponent
];

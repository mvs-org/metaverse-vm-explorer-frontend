import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MSTsComponent } from './msts.component'

const routes: Routes = [{
  path: '',
  component: MSTsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MSTsRoutingModule { }

export const routedComponents = [
  MSTsComponent
];

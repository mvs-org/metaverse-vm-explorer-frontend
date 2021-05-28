import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlocksComponent } from './blocks.component'

const routes: Routes = [{
  path: '',
  component: BlocksComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlocksRoutingModule { }

export const routedComponents = [
  BlocksComponent
];

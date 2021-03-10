import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { SearchModule } from '../../components/search/search.module'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SearchModule,
    StartRoutingModule
  ]
})
export class StartModule { }

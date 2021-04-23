import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebtoonsRoutingModule } from './webtoons-routing.module';
import { WbbookListComponent } from './wbbook-list/wbbook-list.component';
import { WbbookSingleComponent } from './wbbook-single/wbbook-single.component';


@NgModule({
  declarations: [WbbookListComponent, WbbookSingleComponent],
  imports: [
    CommonModule,
    WebtoonsRoutingModule
  ]
})
export class WebtoonsModule { }

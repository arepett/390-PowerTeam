import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsRoutingModule } from './comics-routing.module';
import { CmbookListComponent } from './cmbook-list/cmbook-list.component';
import { CmbookSingleComponent } from './cmbook-single/cmbook-single.component';


@NgModule({
  declarations: [CmbookListComponent, CmbookSingleComponent],
  imports: [
    CommonModule,
    ComicsRoutingModule
  ]
})
export class ComicsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildbooksRoutingModule } from './childbooks-routing.module';
import { ChbookListComponent } from './chbook-list/chbook-list.component';
import { ChbookSingleComponent } from './chbook-single/chbook-single.component';


@NgModule({
  declarations: [ChbookListComponent, ChbookSingleComponent],
  imports: [
    CommonModule,
    ChildbooksRoutingModule
  ]
})
export class ChildbooksModule { }

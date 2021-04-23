import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangasRoutingModule } from './mangas-routing.module';
import { MnbookListComponent } from './mnbook-list/mnbook-list.component';
import { MnbookSingleComponent } from './mnbook-single/mnbook-single.component';


@NgModule({
  declarations: [MnbookListComponent, MnbookSingleComponent],
  imports: [
    CommonModule,
    MangasRoutingModule
  ]
})
export class MangasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovelsRoutingModule } from './novels-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookSingleComponent } from './book-single/book-single.component';


@NgModule({
  declarations: [BookListComponent, BookSingleComponent],
  imports: [
    CommonModule,
    NovelsRoutingModule
  ]
})
export class NovelsModule { }

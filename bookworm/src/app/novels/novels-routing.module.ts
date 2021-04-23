import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookSingleComponent } from './book-single/book-single.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: ':bookname',
    component: BookSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovelsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChbookListComponent } from './chbook-list/chbook-list.component';
import { ChbookSingleComponent } from './chbook-single/chbook-single.component';


const routes: Routes = [
  {
    path: '',
    component: ChbookListComponent
  },
  {
    path: ':wbbookname',
    component: ChbookSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildbooksRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MnbookListComponent } from './mnbook-list/mnbook-list.component';
import { MnbookSingleComponent } from './mnbook-single/mnbook-single.component';


const routes: Routes = [
  {
    path: '',
    component: MnbookListComponent
  },
  {
    path: ':wbbookname',
    component: MnbookSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangasRoutingModule { }

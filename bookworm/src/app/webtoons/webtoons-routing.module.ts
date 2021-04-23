import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WbbookListComponent } from './wbbook-list/wbbook-list.component';
import { WbbookSingleComponent } from './wbbook-single/wbbook-single.component';


const routes: Routes = [
  {
    path: '',
    component: WbbookListComponent
  },
  {
    path: ':wbbookname',
    component: WbbookSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebtoonsRoutingModule { }

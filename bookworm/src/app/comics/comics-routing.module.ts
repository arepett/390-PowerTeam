import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmbookListComponent } from './cmbook-list/cmbook-list.component';
import { CmbookSingleComponent } from './cmbook-single/cmbook-single.component';


const routes: Routes = [
  {
    path: '',
    component: CmbookListComponent
  },
  {
    path: ':wbbookname',
    component: CmbookSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }

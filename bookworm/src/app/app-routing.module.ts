import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'novels',
    loadChildren: () => import('./novels/novels.module').then(m => m.NovelsModule)
  },
  {
    path: 'childbooks',
    loadChildren: () => import('./childbooks/childbooks.module').then(m => m.ChildbooksModule)
  },
  {
    path: 'comics',
    loadChildren: () => import('./comics/comics.module').then(m => m.ComicsModule)
  },
  {
    path: 'mangas',
    loadChildren: () => import('./mangas/mangas.module').then(m => m.MangasModule)
  },
  {
    path: 'webtoons',
    loadChildren: () => import('./webtoons/webtoons.module').then(m => m.WebtoonsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path:'',
    component:MainLayoutComponent,
    children:[
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'users',
        component:UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

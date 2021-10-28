import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Signup2Component } from './pages/signup2/signup2.component';
import { LoginComponent } from './pages/users/login/login.component';
import { ProfileComponent } from './pages/users/profile/profile.component';
import { SignupComponent } from './pages/users/signup/signup.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"user", children:[
    {path:"",component:ProfileComponent},
    {path:"signup",component:SignupComponent},
    {path:"login",component:LoginComponent},
    {path:"signup2",component:Signup2Component},

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

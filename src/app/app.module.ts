import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/users/signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/users/login/login.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';



import { ProfileComponent } from './pages/users/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Signup2Component } from './pages/signup2/signup2.component';
import { AuthInterceptor } from './providers/interceptors/auth.interceptor';
import { AddToCartComponent } from './pages/users/add-to-cart/add-to-cart.component';
import { ProductComponent } from './pages/products/product/product.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    Signup2Component,
    AddToCartComponent,
    ProductComponent,
    NavbarComponent,


    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    CarouselModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,


  ],
  providers: [    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }

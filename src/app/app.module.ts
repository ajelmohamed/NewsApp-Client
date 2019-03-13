import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormsModule, ReactiveFormsModule } from   '@angular/forms';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { Routes, RouterModule } from '../../node_modules/@angular/router';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'acceuil', component: AcceuilComponent },

];
@NgModule({
  declarations: [


    AppComponent,
    SigninComponent,
    SignupComponent,
    AcceuilComponent
  ],
  imports: [
    RouterModule.forRoot(routes),

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

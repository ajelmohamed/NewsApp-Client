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
import { AuthGuardService } from './Services/auth-guard.service';
import { AuthService } from './Services/auth.service';

const routes: Routes = [
  { path: 'acceuil',  canActivate: [AuthGuardService], component: AcceuilComponent },

  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '', canActivate: [AuthGuardService],component: AcceuilComponent  },

  { path: '**', redirectTo: '' }

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
  providers: [  
     AuthGuardService,
     AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

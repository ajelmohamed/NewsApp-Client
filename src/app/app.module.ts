import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormsModule, ReactiveFormsModule } from   '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './Services/auth-guard.service';
import { AuthService } from './Services/auth.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { AcceuilParCategorieComponent } from './acceuil-par-categorie/acceuil-par-categorie.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';

const routes: Routes = [
  { path: 'acceuil', component: AcceuilComponent },

  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  {path:'postdetail/:id',component:PostdetailComponent},
  {path:'postparcategorie/:id',component:AcceuilParCategorieComponent},

  { path: '' ,component: AcceuilComponent  },

  { path: '**', redirectTo: '' }

];
@NgModule({
  declarations: [

    HeaderComponent,
    FooterComponent,
    AppComponent,
    SigninComponent,
    SignupComponent,
    AcceuilComponent,
    HeaderComponent,
    FooterComponent,
    PostdetailComponent,
    AcceuilParCategorieComponent,
    SidebarComponent,
    LatestNewsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    NgxPaginationModule,
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

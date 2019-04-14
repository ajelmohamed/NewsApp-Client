import { Component, OnInit } from '@angular/core';
import { Categorie } from '../Models/Categorie';
import { Subscription } from 'rxjs';
import { CaterogieService } from '../Services/caterogie.service';
import { Router } from '@angular/router';
import { NgModel } from '../../../node_modules/@angular/forms';
import { PostService } from '../Services/post.service';
import { Post } from '../Models/Post';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categories: Categorie[];
  categoriesSubscription: Subscription;
  Searchbox:String;

  constructor(private categorieservice : CaterogieService, private router : Router, private postsService:PostService) {
   }
 
   onSearch(msj: NgModel){
     this.Searchbox=msj.value;
     console.log(this.Searchbox);
     this.postsService.searchPostsFromServer(this.Searchbox);
    
  }
   onViewCategorie(i){
     this.router.navigate(['/postparcategorie/',this.categories[i].idCategorie]);
    
   }
  
  ngOnInit() {
    this.categoriesSubscription = this.categorieservice.CategoriesSubject.subscribe(
      (categories: Categorie[]) => {
        this.categories = categories;
      }
    );
    
     this.categorieservice.emitCategories()
  }

  ngOnDestroy(){
    this.categoriesSubscription.unsubscribe();
  }

}

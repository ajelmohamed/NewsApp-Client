import { Component, OnInit } from '@angular/core';
import { Categorie } from '../Models/Categorie';
import { Subscription } from 'rxjs';
import { CaterogieService } from '../Services/caterogie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categories: Categorie[];
  categoriesSubscription: Subscription;
  

  constructor(private categorieservice : CaterogieService, private router : Router) {
   }
 
   onViewCategorie(i){
    
      this.router.navigate(['/postparcategorie/',this.categories[i].idCategorie]);
    
   }
  
  ngOnInit() {
    this.categoriesSubscription = this.categorieservice.CategoriesSubject.subscribe(
      (categories: Categorie[]) => {
        this.categories = categories;
        console.log(this.categories)
      }
    );
    
     this.categorieservice.emitCategories
  }

  ngOnDestroy(){
    this.categoriesSubscription.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/Post';
import { Subscription } from '../../../node_modules/rxjs';
import { PostService } from '../Services/post.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-acceuil-par-categorie',
  templateUrl: './acceuil-par-categorie.component.html',
  styleUrls: ['./acceuil-par-categorie.component.scss']
})
export class AcceuilParCategorieComponent implements OnInit {

  posts: Post[];
  

  constructor(private postservice : PostService, private router : Router,private route: ActivatedRoute) {
    
   }
 
 
  
  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      // do something with the query params
    });
    this.route.params.subscribe(routeParams => {
      this.postservice.getPostParCategorie(routeParams.id).then(
        (post: Post[]) => {
          this.posts = post;
        }
      );
      
    });
   
  
  }

  

}

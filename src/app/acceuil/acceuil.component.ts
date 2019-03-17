import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/Post';
import { Subscription } from 'rxjs';
import { PostService } from '../Services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  posts: Post[];
  postsSubscription: Subscription;
  

  constructor(private postservice : PostService, private router : Router) {
    
   }
 
 
  
  ngOnInit() {
    this.postsSubscription = this.postservice.PostsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
        console.log(this.posts)
      }
    );
    
     this.postservice.emitPosts
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }

}

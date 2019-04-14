import { Component, OnInit } from '@angular/core';
import { Subscription } from '../../../node_modules/rxjs';
import { Post } from '../Models/Post';
import { PostService } from '../Services/post.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  posts: Post[];
  

  constructor(private postservice : PostService, private router : Router) {
   }
 
 
  
  ngOnInit() {
    this.getPopularPost();
  }

  getPopularPost(){
    this.postservice.getPopularPost().then(
      (posts: Post[]) => {
        this.posts = posts;

      }
    );
    
  }

  ngOnDestroy(){
  }

}

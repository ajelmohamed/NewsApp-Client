import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { Post } from '../Models/Post';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  lposts: Post[];
  

  constructor(private postservice : PostService, private router : Router) {
   }
 
 
  
  ngOnInit() {
    this.getLatestPost();
  }

  getLatestPost(){
    this.postservice.getLatestPost().then(
      (posts: Post[]) => {
        this.lposts = posts;

      }
    );
    
  }

  ngOnDestroy(){
  }


}

import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/Post';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { PostService } from '../Services/post.service';
import { Comment } from '../Models/Comment';
import { first } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostdetailComponent implements OnInit {

 

  post: Post;
  message:String;
  constructor(private route: ActivatedRoute, private postsService: PostService,
              private router: Router) {}

  ngOnInit() {
    this.post = new Post();
    
    const id = this.route.snapshot.params['id'];
    this.postsService.getSinglePost(id).then(
      (post: Post) => {
        this.post = post;
        console.log(this.post);
      }
    );
  }

  addComment(){
    console.log(this.message)
    let comment:Comment=new Comment();
    comment.contenuComment=this.message
    comment.user=JSON.parse(localStorage.getItem('currentUser'))
    this.postsService.saveComment(comment)
  .pipe(first())
  .subscribe(
   data=>{
            //console.log("succes");
            this.router.navigate(['ListPosts']);
   },
   error=>{
            //console.log("erreur");
           
   }
  );
  }
}

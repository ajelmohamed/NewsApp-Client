import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/Post';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { PostService } from '../Services/post.service';
import { first } from '../../../node_modules/rxjs/operators';
import { Like } from '../Models/Like';
import { Comment } from '../Models/Comment';
import { del } from '../../../node_modules/@types/selenium-webdriver/http';
import { User } from '../Models/User';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostdetailComponent implements OnInit {

 

  post: Post;
  message:String;
  messagee:String;
  currentUser:User;
  modifier:Boolean=true;
  modcom:Comment
  constructor(private route: ActivatedRoute, private postsService: PostService,
              private router: Router) {

              }

  ngOnInit() {
    this.post = new Post();
    this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
    const id = this.route.snapshot.params['id'];
    this.postsService.getSinglePost(id).then(
      (post: Post) => {
        this.post = post;
      }
    );
  }

  choixModif(modcom : Comment){
    this.modcom=modcom;
    this.modifier=false;
    this.messagee=modcom.contenuComment;
  }

  deleteCom(delcom:Comment){
    const comIndexToRemove = this.post.listComment.findIndex(
      (comEl) => {
        if(comEl.idComment === delcom.idComment) {
          return true;
        }
      }
    );
    this.post.listComment.splice(comIndexToRemove, 1);
    this.postsService.updatePost(this.post).pipe(first()).subscribe(
      (data : Post)=>{
         this.post=data
         this.modifier=true;
      },
      error=>{

      }     

      )

  }
  editComment(){
    this.modcom.contenuComment=this.messagee
    const comIndexToRemove = this.post.listComment.findIndex(
      (comEl) => {
        if(comEl.idComment === this.modcom.idComment) {
          return true;
        }
      }
    );
    this.post.listComment.splice(comIndexToRemove, 1);
    this.post.listComment.push(this.modcom);
    this.postsService.updatePost(this.post).pipe(first()).subscribe(
      (data : Post)=>{
         this.post=data
         this.modifier=true;
      },
      error=>{

      }     

      )

  }

  addComment(){
    console.log(this.message)
    let comment:Comment=new Comment();
    comment.contenuComment=this.message

    comment.user=this.currentUser;
    this.postsService.saveComment(comment)
  .pipe(first())
  .subscribe(
   (data : Comment )=>{
        this.post.listComment.push(data);

        this.postsService.updatePost(this.post).pipe(first()).subscribe(
            (data : Post)=>{
               this.post=data

            },
            error=>{

            }     

            )
            //this.post.updatePost()
           // this.router.navigate(['ListPosts']);
   },
   error=>{
            //console.log("erreur");
           
   }
  );
  }
}

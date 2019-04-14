import { Injectable } from '@angular/core';
import { Post } from '../Models/Post';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../Models/Comment';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private listPost : Post[] = [];
  private url:string;
  public PostsSubject = new Subject<Post[]>()
  constructor(private httpClient: HttpClient){
    this.getPostsFromServer();
  }

  emitPosts(){
    this.PostsSubject.next(this.listPost.slice());
  } 
 getPostsFromServer(){
  
  this.httpClient.get('http://localhost:9999/findAllPost').subscribe((res : any[])=>{
    this.listPost=res["content"];
    this.emitPosts();
  });
  
 }

 searchPostsFromServer(search : String){
  
  this.httpClient.get('http://localhost:9999/searchPosts/'+search).subscribe((res : any[])=>{
    this.listPost=res["content"];
    this.emitPosts();
  });
  
 }

 saveComment(comment:Comment)
{
  return this.httpClient.post(`http://localhost:9999/saveComment`, comment)
        .pipe(map((comment : Comment) => {
            // register successful if there's a jwt token in the response
            if (comment ) {
                console.log(comment);
    
               // this.getAllPosts();
                
            }
           // this.getAllPosts();
            return comment;
        }));
}
 
updatePost(post :Post){
  return this.httpClient.put(`http://localhost:9999/updatePost/`+post.idPost, post)
        .pipe(map((post : Post) => {
            // register successful if there's a jwt token in the response
            if (post ) {
                console.log(post);
    
               // this.getAllPosts();
                
            }
           // this.getAllPosts();
            return post;
        }));
}
 
 getSinglePost(id: String) {
   this.url='http://localhost:9999/findPost/'+id;
   return new Promise(
    (resolve, reject) => {
      this.httpClient.get(this.url).subscribe(
        (res : any[])=>{
          resolve(res);
        }, (error) => {
          reject(error);
        }
      );
    }
  );
}

getPopularPost() {
  this.url='http://localhost:9999/findPopularPosts/';
  return new Promise(
   (resolve, reject) => {
     this.httpClient.get(this.url).subscribe(
       (res : any[])=>{
         resolve(res);
       }, (error) => {
         reject(error);
       }
     );
   }
 );
}
getLatestPost() {
  this.url='http://localhost:9999/findLatestPosts/';
  return new Promise(
   (resolve, reject) => {
     this.httpClient.get(this.url).subscribe(
       (res : any[])=>{
         resolve(res);
       }, (error) => {
         reject(error);
       }
     );
   }
 );
}

getPostParCategorie(id: String) {
  this.url='http://localhost:9999/findpostParCategorie/'+id;
  return new Promise(
   (resolve, reject) => {
     this.httpClient.get(this.url).subscribe(
       (res : any[])=>{
         resolve(res);
       }, (error) => {
         reject(error);
       }
     );
   }
 );
}


}

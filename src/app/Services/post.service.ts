import { Injectable } from '@angular/core';
import { Post } from '../Models/Post';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private listPost : Post[] = [];

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
 
}

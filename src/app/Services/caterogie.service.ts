import { Injectable } from '@angular/core';
import { Categorie } from '../Models/Categorie';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaterogieService {
  private listCategorie : Categorie[] = [];

  public CategoriesSubject = new Subject<Categorie[]>()
  constructor(private httpClient: HttpClient){
    this.getCategoriesFromServer();
  }

  emitCategories(){
    this.CategoriesSubject.next(this.listCategorie.slice());
  } 
 getCategoriesFromServer(){
  
  this.httpClient.get('http://localhost:9999/findAllCategorie').subscribe((res : any[])=>{
    this.listCategorie=res["content"];
    this.emitCategories();
  });
  
 }
 
 
 


 
  
}

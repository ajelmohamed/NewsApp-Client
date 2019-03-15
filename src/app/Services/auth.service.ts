import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  register(user :User) {
    
    
    return this.http.post(`http://localhost:9999/registerUser`, user)
    .pipe(map(user => {
        // register successful if there's a jwt token in the response
        if (user ) {
            console.log(user);

            localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
    }));
}


    login(username: string, password: string) {
        const  params = new  HttpParams().set('email', username).set('password', password);
       
        return this.http.post<any>(`http://localhost:9999/loginUser`,params )
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user ) {
                    console.log(user);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    } 

}

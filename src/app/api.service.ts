import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {appRoutes} from '../constants/constants';
import {Router, ActivatedRoute} from '@angular/router';
import { User } from './models/user';
import { Observable } from 'rxjs';
import { Products } from './models/products';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  auth_token: any;
  header: any;
  user: any;




  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
 
  }


  listUsers(): Observable<User[]>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json', 'X-Requested-With':'XMLHttpRequest', 'Authorization': 'Bearer ' +this.auth_token})
    }
    return this.http.get<User[]>(environment.apiEndPoint+'users', httpOptions);
  }

  listProducts(): Observable<Products[]>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json', 'X-Requested-With':'XMLHttpRequest', 'Authorization': 'Bearer ' +this.auth_token})
    }
    return this.http.get<User[]>(environment.apiEndPoint+'products', httpOptions);
  }

  getUsersById(id: number): Observable<User[]>{
    return this.http.get<User[]>(environment.apiEndPoint+'users/'+id);
  }

  getAuth(email: string, password: string){
     /* const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': 'true',
          'X-Requested-With': 'XMLHttpRequest',
          'Authorization': 'Bearer '+this.auth_token
        })
      };*/
      const body = JSON.stringify({email: email, password: password});
      const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json', 'X-Requested-With':'XMLHttpRequest', 'Authorization': 'Bearer ' +this.auth_token})
    };
    return this.http.post(environment.apiEndPoint+'login', body, httpOptions);
  }


  getToken(auth_token) {
    this.auth_token = auth_token;
    return window.localStorage.getItem(auth_token)
  }

  sendToken() {
    return this.auth_token;
  }



  showHeader() {
      switch (window.location.pathname) {
          case appRoutes.login:
              return false;
          case appRoutes.home:
              return true;
          
          case appRoutes.users:
              return true;
          case appRoutes.products:
              return true;
          default:
              return false
      }
  }


  isAuthenticated(){

    let user = JSON.parse(localStorage.getItem("user")); 

    if(user==null){
      this.router.navigate(['/login']);
    }

  }

  userToken(){
    return JSON.parse(localStorage.getItem("user")); 
  }
  is_admin(){
    if(this.userToken().is_admin) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }
  openPage(page: string) {
    this.router.navigate([page]);
  }



}
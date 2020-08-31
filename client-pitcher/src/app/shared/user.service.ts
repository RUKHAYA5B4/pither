import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import user model class
import { User } from './user.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  //delare user model object and initilize here
  selectedUser: User = {
    name:'',
    email: '',
    password: ''

  };


  constructor(public http: HttpClient) { }

  postUser(user: User){
    console.log(user);
    return this.http.post(environment.apiBaseUrl+'/signin',user);
  }
}

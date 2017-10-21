import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";


import { User } from '../model/user'


const USER_PATH: string = 'https://randomuser.me/api/?results=20';

const ONE_USER_PATH: string = 'https://randomuser.me/api/?md5='
@Injectable()
export class UserService {

  users: User[];

  constructor(
    private http: HttpClient
  ) { }

  getUsers():Observable<any>
  {
    return this.http.get(`${USER_PATH}`);
  }

  getOneUsers(id:string):Observable<any>
  {
    return this.http.get(`${USER_PATH}/${id}`);
  }


  
}

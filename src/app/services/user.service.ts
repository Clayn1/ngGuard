import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser(id){
    return this.httpClient.get<UserModel>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}

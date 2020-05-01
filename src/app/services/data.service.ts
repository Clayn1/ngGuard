import {Injectable} from '@angular/core';
import {UserModel} from '../models/UserModel';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private state = new BehaviorSubject([]);

  constructor() {
  }

  getState() {
    return this.state;
  }

  setState(user: UserModel[]) {
    this.state.next(user);
    console.log(this.state.value);
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserModel} from '../models/UserModel';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserModel;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {
    this.activatedRoute.data.subscribe(value => {
      this.user = value.user;
      this.addState(value.user);
    });
    dataService.getState().subscribe(value => console.log(value));
  }

  addState(user: UserModel) {
    for (const el of this.dataService.getState().value){
      if (el.id === user.id){
        return this.dataService.getState().value;
      }
    }
    return this.dataService.setState([...this.dataService.getState().value, user]);
  }

  ngOnInit(): void {
  }

}

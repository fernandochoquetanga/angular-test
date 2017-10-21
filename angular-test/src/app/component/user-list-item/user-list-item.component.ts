import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../shared/model/user'

import { UserService } from "../../shared/service/user.service";


@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input()
  user: User = undefined;


  constructor(private route: Router  , private userService:UserService ) { }

  ngOnInit() {
  }

  onClick(puser: any): void {
    console.log(puser);
    this.route.navigate(['user-item', puser]) 
  }



}

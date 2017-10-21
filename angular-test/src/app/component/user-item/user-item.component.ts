import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../shared/model/user'

import { UserService } from "../../shared/service/user.service";


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params
      .subscribe((params) => {
        this.userService.getOneUsers(params.id)
          .subscribe((user) => {
            console.log(user.results);
            this.user = user.results;
          }
          )

      });
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { MaterialModule } from '../../material/material.module';
import { UserService } from '../../shared/service/user.service';

import { UserListComponent } from '../../component/user-list/user-list.component';
import { UserListItemComponent } from '../../component/user-list-item/user-list-item.component';
import { UserItemComponent } from '../../component/user-item/user-item.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [
    UserListComponent,
    UserListItemComponent,
    UserItemComponent
  ],
  providers: [UserService]
})
export class UserModule { }

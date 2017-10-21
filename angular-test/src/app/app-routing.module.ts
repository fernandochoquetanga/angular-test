import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  LoginComponent } from "./component/login/login.component";
import { UserListComponent  } from "./component/user-list/user-list.component";
import {UserItemComponent} from './component/user-item/user-item.component'



import   {StoriesComponent} from './component/stories/stories.component' 
import { StoriesAddComponent  } from "./component/stories-add/stories-add.component";
import { StoriesEditComponent  } from "./component/stories-edit/stories-edit.component";


const routes: Routes = [
  {
    path: '', //root of the application
    component: LoginComponent
    
  },{
    path: 'user-list', //root of the application
    component: UserListComponent    
  }
  ,{
    path: 'user-item/:id', //root of the application
    component:UserItemComponent
  }

  ,{
    path: 'Home', //root of the application
    component:StoriesComponent
  }

  ,{
    path: 'new', //root of the application
    component:StoriesAddComponent
  }
  ,{
    path: 'edit/:id', //root of the application
    component:StoriesEditComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

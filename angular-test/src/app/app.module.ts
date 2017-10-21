import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from "./component/login/login.component";
import { MaterialModule } from "./material/material.module";
import { AppComponent } from './app.component';
import { UserModule } from './module/user/user.module';
import { StoriesModule } from './module/stories/stories.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    UserModule,   
    StoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

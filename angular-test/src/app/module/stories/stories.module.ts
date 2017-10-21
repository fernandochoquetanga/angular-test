import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';



import { MaterialModule } from '../../material/material.module';
import{ Stories  } from '../../shared/model/stories';
import { StoriesComponent } from '../../component/stories/stories.component';
import { StoriesService } from '../../shared/service/stories.service';
import { StoriesAddComponent } from '../../component/stories-add/stories-add.component';
import { StoriesListItemComponent } from '../../component/stories-list-item/stories-list-item.component';
import { StoriesEditComponent } from '../../component/stories-edit/stories-edit.component' ;




@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    StoriesComponent,
    StoriesAddComponent,
    StoriesListItemComponent,
    StoriesEditComponent
  ],
  providers: [StoriesService]
})
export class StoriesModule { }

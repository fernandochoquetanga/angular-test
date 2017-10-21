import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Stories } from "../../shared/model/stories";
import { StoriesService } from "../../shared/service/stories.service";


@Component({
  selector: 'app-stories-edit',
  templateUrl: './stories-edit.component.html',
  styleUrls: ['./stories-edit.component.css']
})
export class StoriesEditComponent implements OnInit {

storie :Stories=undefined;

  constructor(private activeRoute: ActivatedRoute, private storieService:StoriesService   ) { }

  ngOnInit() {
    this.activeRoute.params
      .subscribe((params) => {
        this.storieService.getOneStories(params.id)
          .subscribe((storie) => {
            //console.log(user.results);
            this.storie = storie;
          }
          )

      });
  }

}

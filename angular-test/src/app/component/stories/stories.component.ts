import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Stories } from '../../shared/model/stories';
import { StoriesService } from "../../shared/service/stories.service";


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories: Stories[]=undefined;


  constructor(private storiresServices: StoriesService,private router:Router) { }

  ngOnInit() {
    this.storiresServices.getStories()
      .subscribe((data) => {
      
        this.stories = data;
        console.log('llego la data',this.stories);
      });
  }

  onClick():void
  {
    this.router.navigate(['new']); 

    }


}

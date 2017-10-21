import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


import { Stories } from "../../shared/model/stories";

@Component({
  selector: 'app-stories-list-item',
  templateUrl: './stories-list-item.component.html',
  styleUrls: ['./stories-list-item.component.css']
})
export class StoriesListItemComponent implements OnInit {



  @Input()
  storie: Stories = undefined;

  constructor(private route: Router) { }

  ngOnInit() {
  }


  onClick(storie:any): void {
    console.log(storie);
    this.route.navigate(['edit', storie.id]) 

  }

}

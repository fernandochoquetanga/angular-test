import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";


import { Stories } from '../model/stories';

const PATH_STORIES: string = 'http://localhost:3000/posts';


@Injectable()
export class StoriesService {

  stories: Stories[];

  constructor(private http: HttpClient) { }


  getStories(): Observable<any> {
    return this.http.get(`${PATH_STORIES}`);
  }

  getOneStories(id: string): Observable<any> {
    return this.http.get(`${PATH_STORIES}/${id}`);
  }


}

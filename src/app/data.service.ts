import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }


}

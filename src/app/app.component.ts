import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Post } from './post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Contiene los post que se van a recoger del servicio
  posts = [];

  constructor(private service: DataService) {
    this.service.getData().subscribe(data =>  {
      this.posts = data;
    });
  }

  onSelect(post: Post): void {
    for (let i = 0; i < this.posts.length; i++) {
      if (post.id === this.posts[i].id) {
        this.posts.splice(i, 1);
      }
    }
  }

}

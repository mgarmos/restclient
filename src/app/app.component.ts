import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Contiene los post que se van a recoger del servicio
  posts = [];

  title = 'restClient';

  constructor(private service: DataService) {
    console.log('He entrado');
    this.service.getData().subscribe(data =>  {
      this.posts = data;
    });
    console.log('He salido');
  }

}

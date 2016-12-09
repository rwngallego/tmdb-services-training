import { Component } from '@angular/core';
import { moviesList} from './app.moviesStore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  baseUrl = "http://image.tmdb.org/t/p/w300/";
  title = 'app works!';
  movies = moviesList.results;

  constructor(){}

  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }

}

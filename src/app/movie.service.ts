import { Injectable } from '@angular/core';
import { moviesList} from './app.moviesStore';

@Injectable()
export class MovieService {

  private movies = [];

  constructor() {
    console.log("A MovieService instance was created");
    this.movies = moviesList.results;
   }

  get(): any {
    return this.movies;
  }

  add(movie: any): void{
    this.movies.push(movie);
  }

  delete(movie) {
      let index = this.movies.indexOf(movie);
      if(index >= 0) {
          this.movies.splice(index, 1);
      }
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class MovieService {

  API_KEY = '362f309ced9506f3b5c1f401d7bb73fb';

  API_HOST = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) { }


  getTrendingMovies(page) {
    const api = this.API_HOST + 'trending/movie/day?api_key=' + this.API_KEY + '&page=' + page;
    return this.http.get(api);
  }

  getPopularMovies(page) {
    const api = this.API_HOST + 'movie/popular?api_key=' + this.API_KEY + '&language=en-US&page=' + page;
    return this.http.get(api);
  }

  searchEntries(term, page) {
    const api = this.API_HOST + 'search/movie?api_key=' + this.API_KEY + '&query=' + term + '&page=' + page;
    return this.http.get(api);
  }

  getMovieDetails(id) {
    const api = this.API_HOST + 'movie/' + id + '?api_key=' + this.API_KEY + '&language=en-US&append_to_response=credits';
    return this.http.get(api);
  }

  getCastDetails(id){
    const api = this.API_HOST + 'person/' + id + '?api_key=' + this.API_KEY + '&language=en-US&append_to_response=movie_credits';
    return this.http.get(api);
  }

}

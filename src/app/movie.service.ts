import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';

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
    const api = this.API_HOST + 'movie/' + id + '?api_key=' + this.API_KEY + '&language=en-US';
    return this.http.get(api);
  }

  getMovieCast(id) {
    const api = this.API_HOST + 'movie/' + id + '/credits?api_key=' + this.API_KEY;
    return this.http.get(api);
  }

}

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


  getTrendingMovies() {
    const api = this.API_HOST + 'trending/movie/day?api_key=' + this.API_KEY;
    return this.http.get(api);
  }

  getPopularMovies() {
    const api = this.API_HOST + 'movie/popular?api_key=' + this.API_KEY + '&language=en-US&page=1';
    return this.http.get(api);
  }

  search(terms) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(terms => this.searchEntries(terms));
  }

  searchEntries(term) {
    const api = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${term}`;
    return this.http.get(api);
  }
}

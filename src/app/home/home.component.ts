import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.scss','./home.component.scss']
})

export class HomeComponent implements OnInit {

  movieList;

  constructor( private movieService: MovieService ) { }


  ngOnInit(): void {
    this.listPopularMovies();
  }


  listPopularMovies() {
    this.movieService.getPopularMovies().subscribe(
      (data: any) => {
        this.movieList = data.results;
        console.log('popular',this.movieList);
      },
      err => console.log(err)
    );
  }

  listTrendingMovies() {
    this.movieService.getTrendingMovies().subscribe(
      (data: any) => {
        this.movieList = data.results;
        console.log('trending',this.movieList);
      },
      err => console.log(err)
    );
  }

  

}

import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  popularMovies;
  trendingMovies;

  constructor( private movieService: MovieService ) { }

  listPopularMovies() {
    this.movieService.getPopularMovies().subscribe(
      data => {
        this.popularMovies = data;
        console.log('popular',data);
      },
      err => console.log(err)
    );
  }

  listTrendingMovies() {
    this.movieService.getTrendingMovies().subscribe(
      data => {
        this.trendingMovies = data;
        console.log('trending',data);
      },
      err => console.log(err)
    );
  }

  ngOnInit(): void {
    this.listPopularMovies();
    this.listTrendingMovies();
  }

}

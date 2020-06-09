import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../movie.service';

import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.scss','./home.component.scss']
})

export class HomeComponent implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator;

  movieList;

  pagination = 1; //for init
  currentSection = 'popular'; //for navigation purpose

  totalResults;

  searchValue = "";


  constructor( private movieService: MovieService ) { }
  

  ngOnInit(): void {
    this.movieList;
    this.listPopularMovies(this.pagination);
  }


  listPopularMovies(pageNumber) {
    this.movieService.getPopularMovies(pageNumber).subscribe(
      (data: any) => {
        this.totalResults = data.total_results;
        this.movieList = data.results;
      },
      err => console.log(err)
    );
  }

  listTrendingMovies(pageNumber) {
    this.movieService.getTrendingMovies(pageNumber).subscribe(
      (data: any) => {
        this.totalResults = data.total_results;
        this.movieList = data.results;
      },
      err => console.log(err)
    );
  }


  pageChangeEvent(event){
    this.pagination = event.pageIndex + 1
    
    if(this.currentSection == 'popular'){
      this.listPopularMovies(this.pagination);
    }

    else if(this.currentSection == 'trending'){
      this.listTrendingMovies(this.pagination);
    }

    else if(this.currentSection == 'search'){
      this.searchMovie(this.pagination);
    }
  }


  searchMovie(pageNumber) {
    this.currentSection = 'search';
    this.movieService.searchEntries(this.searchValue, pageNumber).subscribe(
      (data: any) => {
        this.totalResults = data.total_results;
        this.movieList = data.results;
      },
      err => console.log(err)
    );
  }
  

}

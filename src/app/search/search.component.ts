import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../app.component.scss','./search.component.scss']
})
export class SearchComponent implements OnInit {

  currentValue = "";

  constructor( private movieService: MovieService ) { }

  ngOnInit(): void {
  }

  test(){
    console.log(this.currentValue);
    this.searchMovies();
  }

  searchMovies() {
    this.movieService.searchEntries(this.currentValue).subscribe(
      (data: any) => {
        
        console.log('popular',data);
      },
      err => console.log(err)
    );
  }

}
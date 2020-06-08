import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['../app.component.scss','./movie.component.scss']
})
export class MovieComponent implements OnInit {

  // for routing
  sub;
  id;

  movie;
  castMembers;

  constructor(private route: ActivatedRoute, private movieService: MovieService ) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {

      this.id = params['id'];

      this.movieService.getMovieDetails(this.id).subscribe(
        data => {
          this.movie = data;
          console.log(this.movie);
        },
        err => console.log(err)
      );

      this.movieService.getMovieCast(this.id).subscribe(
        (data: any) => {
          this.castMembers = data.cast;
          console.log(this.castMembers);
        },
        err => console.log(err)
      );

    })

  }

}

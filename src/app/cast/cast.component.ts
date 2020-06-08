import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['../app.component.scss','./cast.component.scss']
})
export class CastComponent implements OnInit {

  // for routing
  sub;
  id;

  cast;
  movieList;

  constructor(private route: ActivatedRoute, private movieService: MovieService ) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {

      this.id = params['id'];

      this.movieService.getCastDetails(this.id).subscribe(
        (data: any) => {
          this.cast = data;
          this.movieList = data.movie_credits.cast;
          console.log(this.cast);
        },
        err => console.log(err)
      );

    })

  }

}

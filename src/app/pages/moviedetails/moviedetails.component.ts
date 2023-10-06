import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieapiService } from 'src/app/service/movieapi.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})

export class MoviedetailsComponent implements OnInit {

  movieDetails: any = {
    genres: []
  }
  castDetails: any = {
    cast: []
  }

  constructor(
    private route:ActivatedRoute,
    private movieService: MovieapiService,
  ) {}

  ngOnInit(): void {
    this.getMovieDetails();
    this.getCastDetails();
  }

  getMovieDetails(){
    this.route.params.subscribe((params) => {

      const movieId = +params['id']

      this.movieService.getMovieDetailsById(movieId).subscribe((result) => {
        this.movieDetails = result;
        console.log(result, "moviedetails")
      })

    })
  }

  getCastDetails(){
    this.route.params.subscribe((params) => {

      const movieId = +params['id']

      this.movieService.getMovieCreditsById(movieId).subscribe((result) => {
        this.castDetails = result;
        console.log(result, "castdetails")
      })

    })
  }

}

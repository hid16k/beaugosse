import { Component, OnInit } from '@angular/core';
import { MovieapiService } from 'src/app/service/movieapi.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

  constructor(private service:MovieapiService) {}

  popularMovieResult:any[] = [];
  topMovieResult:any[] = [];
  upcomingMovieResult:any[] = [];

  ngOnInit(): void {
      this.popularData();
      this.topData();
      this.upcomingData();
  }

  popularData(){
    this.service.popularMovieData().subscribe((result) => {
      this.popularMovieResult = result.results;
      console.log(result, 'popularresults');
    })
  }

  topData(){
    this.service.topMovieData().subscribe((result) => {
      this.topMovieResult = result.results;
      console.log(result, 'topratedresults')
    })
  }

  upcomingData(){
    this.service.upcomingMovieData().subscribe((result) => {
      this.upcomingMovieResult = result.results;
      console.log(result, 'topmovieresults')
    })
  }
  
}

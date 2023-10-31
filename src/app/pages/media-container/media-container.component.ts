import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TMDBService } from 'src/app/service/tmdb.service';
import { TrendingMovieResults, TrendingTvResults, PopularMovieResults, PopularTvResults, TopRatedMovieResults, TopRatedTvResults } from 'src/app/pages/media-container/media-data-types.component'

@Component({
  selector: 'app-media-container',
  templateUrl: './media-container.component.html',
  styleUrls: ['./media-container.component.css']
})
export class MediaContainerComponent implements OnInit{
  trendingItems: any;
  popularItems: any;
  topRatedItems: any;

  constructor(
    private route:ActivatedRoute,
    private service:TMDBService
    ) {}

  ngOnInit(): void {
    this.route.url.subscribe((url) => {
      const type = url[0].path;
      if (type === 'movies') {
        this.getMovieData();
      } else if (type === 'tvshows') {
        this.getTvData();
      }
    })
  }

  getMovieData() {
    this.service.trendingMovieData().subscribe((trendingResult) => {
      this.trendingItems = trendingResult;
      console.log(trendingResult, "trending movies")
    });
    this.service.popularMovieData().subscribe((popularResult) => {
      this.popularItems = popularResult;
      console.log(popularResult, "popular movies")
    });
    this.service.topMovieData().subscribe((topRatedResult) => {
      this.topRatedItems = topRatedResult;
      console.log(topRatedResult, "top rated movie data")
    })
  }

  getTvData() {
    this.service.trendingTvData().subscribe((trendingResult) => {
      this.trendingItems = trendingResult;
      console.log(trendingResult, "trending tv")
    });
    this.service.popularTvData().subscribe((popularResult) => {
      this.popularItems = popularResult;
      console.log(popularResult, "popular tv")
    });
    this.service.topTvData().subscribe((topRatedResult) => {
      this.topRatedItems = topRatedResult;
      console.log(topRatedResult, "top rated tv")
    })
  }

}

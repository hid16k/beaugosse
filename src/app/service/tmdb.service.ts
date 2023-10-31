import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TMDBService {

  private apiKey = '910b43d919e330b4ca7a62841a0c32fc';
  private apiUrl = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) {}

  // movies
  trendingMovieData(): Observable<any> {
    return this.http.get(`${this.apiUrl}trending/movie/day?api_key=${this.apiKey}`)
  }

  popularMovieData(): Observable<any> {
    return this.http.get(`${this.apiUrl}movie/popular?api_key=${this.apiKey}`);
  }

  topMovieData(): Observable<any> {
    return this.http.get(`${this.apiUrl}movie/top_rated?api_key=${this.apiKey}`);
  }

  //tvshows
  trendingTvData(): Observable<any> {
    return this.http.get(`${this.apiUrl}trending/tv/day?api_key=${this.apiKey}`)
  }
  popularTvData():Observable<any> {
    return this.http.get(`${this.apiUrl}popular?api_key=${this.apiKey}`)
  }

  topTvData():Observable<any>{
    return this.http.get(`${this.apiUrl}top_rated?api_key=${this.apiKey}`)
  }


}

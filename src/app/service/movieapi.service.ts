import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieapiService {
  private apiKey = '910b43d919e330b4ca7a62841a0c32fc';
  private apiUrl = 'https://api.themoviedb.org/3/movie';

  constructor(private http: HttpClient) {}

  popularMovieData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/popular?api_key=${this.apiKey}`);
  }

  topMovieData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/top_rated?api_key=${this.apiKey}`);
  }

  upcomingMovieData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/upcoming?api_key=${this.apiKey}`);
  }

  getMovieDetailsById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}?api_key=${this.apiKey}`);
  }

  getMovieCreditsById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/credits?api_key=${this.apiKey}`)
  }

}

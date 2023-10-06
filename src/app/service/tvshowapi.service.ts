import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TvshowapiService {
  private apiKey = '910b43d919e330b4ca7a62841a0c32fc';
  private apiUrl = 'https://api.themoviedb.org/3/tv/';

  constructor(private http:HttpClient) { }

  popularTvData():Observable<any> {
    return this.http.get(`${this.apiUrl}popular?api_key=${this.apiKey}`)
  }

  topTvData():Observable<any>{
    return this.http.get(`${this.apiUrl}top_rated?api_key=${this.apiKey}`)
  }

  onAirData():Observable<any> {
    return this.http.get(`${this.apiUrl}on_the_air?api_key=${this.apiKey}`)
  }

  getTvDetailsById(id: number){
    return this.http.get(`${this.apiUrl}/${id}?api_key=${this.apiKey}`)
  }

  getTvCreditsById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/credits?api_key=${this.apiKey}`)
  }

}

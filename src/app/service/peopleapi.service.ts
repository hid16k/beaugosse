import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeopleapiService {

  private apiKey = '910b43d919e330b4ca7a62841a0c32fc'
  private apiUrl = 'https://api.themoviedb.org/3/person/'

  constructor(private http:HttpClient) { }

  popularPeople():Observable<any> {
    return this.http.get(`${this.apiUrl}popular?api_key=${this.apiKey}`);
    
  }

  getPeopleDetailsById(id: number):Observable<any> {
    return this.http.get(`${this.apiUrl}${id}?api_key=${this.apiKey}`)
  }

}

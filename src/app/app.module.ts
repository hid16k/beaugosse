import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { PeopleComponent } from './pages/people/people.component';
import { MovieapiService } from './service/movieapi.service';
import { MoviedetailsComponent } from './pages/moviedetails/moviedetails.component';
import { TvshowdetailsComponent } from './pages/tvshowdetails/tvshowdetails.component';
import { PeopledetailsComponent } from './pages/peopledetails/peopledetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    TvshowsComponent,
    PeopleComponent,
    MoviedetailsComponent,
    TvshowdetailsComponent,
    PeopledetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

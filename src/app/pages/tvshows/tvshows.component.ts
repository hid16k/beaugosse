import { Component, OnInit } from '@angular/core';
import { TvshowapiService } from 'src/app/service/tvshowapi.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {

  constructor(private service:TvshowapiService) {}

  popularTvResult: any[] = [];
  topTvResult: any[] = [];
  onAirResult: any[] = [];

  ngOnInit(): void {
      this.popularData();
      this.topData();
      this.oaData();
  }

  popularData(){
    this.service.popularTvData().subscribe((result)=>{
      this.popularTvResult= result.results;
      console.log(result, "populartvdata")
    })
  }

  topData(){
    this.service.topTvData().subscribe((result)=>{
      this.topTvResult = result.results;
      console.log(result, "topratedtvresults")
    })
  }

  oaData(){
    this.service.onAirData().subscribe((result) => {
      this.onAirResult = result.results;
      console.log(result, "onairtvshowresults")
    })
  }

}

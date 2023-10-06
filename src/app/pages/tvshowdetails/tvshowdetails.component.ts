import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvshowapiService } from 'src/app/service/tvshowapi.service';

@Component({
  selector: 'app-tvshowdetails',
  templateUrl: './tvshowdetails.component.html',
  styleUrls: ['./tvshowdetails.component.css']
})
export class TvshowdetailsComponent implements OnInit{

  constructor(
    private route:ActivatedRoute,
    private tvService:TvshowapiService
  ) {}

  tvDetails: any = []
  castDetails: any = []

  ngOnInit(): void {
    this.getTvDetails();
    this.getCastDetails();
  }

  getTvDetails(){
    this.route.params.subscribe((params) => {

      const tvId = +params['id']

      this.tvService.getTvDetailsById(tvId).subscribe((result) => {
        this.tvDetails = result;
        console.log(result, "tvdetails")
      })

    })
  }

  getCastDetails(){
    this.route.params.subscribe((params) => {

      const tvId = +params['id']

      this.tvService.getTvCreditsById(tvId).subscribe((result) => {
        this.castDetails = result;
        console.log(result, "tvcastdetails")
      })

    })
  }

}

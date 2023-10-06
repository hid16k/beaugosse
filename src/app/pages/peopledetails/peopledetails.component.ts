import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleapiService } from 'src/app/service/peopleapi.service';

@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.css']
})
export class PeopledetailsComponent implements OnInit {

  peopleDetails: any = []

  constructor(
    private route:ActivatedRoute,
    private pplService:PeopleapiService
  ) {}

  ngOnInit(): void {
    this.getPeopleDetails();
  }

  getPeopleDetails(){
    this.route.params.subscribe((params) => {
      const peopleId = +params['id'];

      this.pplService.getPeopleDetailsById(peopleId).subscribe((result) => {
        this.peopleDetails = result;
        console.log(result, "peopledetails")
      })

    })
  }

}

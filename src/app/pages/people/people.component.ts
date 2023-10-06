import { Component, OnInit } from '@angular/core';
import { PeopleapiService } from 'src/app/service/peopleapi.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private service:PeopleapiService) {}

  popularPeopleResults: any[] = []

  ngOnInit(): void {
      this.popularData();
  }

  popularData(){
    this.service.popularPeople().subscribe((result) => {
      this.popularPeopleResults= result.results;
      console.log(result, "popularpeople")
    })
  }

}

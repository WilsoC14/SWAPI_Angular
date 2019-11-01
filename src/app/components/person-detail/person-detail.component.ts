import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SWAPIService } from 'src/app/services/swapi.service';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit() {    /*need to set up route to get the value of name. I copied this from when we previously were logging the data within the searchBar component*/
    this.activatedRoute.data.subscribe(routeData => {console.log(routeData);
    });
  }
}




/*import { Component, OnInit } from '@angular/core';
import { SWAPIService } from 'src/app/services/swapi.service';
import { Person } from 'src/app/Models/Person';
import { MatTableDataSource } from '@angular/material'

@Component({
  selector: 'app-person-index',
  templateUrl: './person-index.component.html',
  styleUrls: ['./person-index.component.css']
})
export class PersonIndexComponent implements OnInit {


  dataSource: MatTableDataSource<Person>;
  constructor(private swapiService: SWAPIService) { }
columnNames = ['name', 'Name', 'birth_year', 'Gender', 'Homeworld'];
  ngOnInit() {
    this.swapiService.getPerson((people: Person[])=>{
      this.dataSource = new MatTableDataSource<Person>(people);
    });
  }

}*/

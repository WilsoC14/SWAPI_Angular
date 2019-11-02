import { Component, OnInit, Input } from '@angular/core';
import { SWAPIService } from 'src/app/services/swapi.service';
import { Person } from 'src/app/Models/Person';
import { MatTableDataSource } from '@angular/material'
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-person-index',
  templateUrl: './person-index.component.html',
  styleUrls: ['./person-index.component.css']
})
export class PersonIndexComponent implements OnInit {

  @Input() set parentData(fruitsalad: string) {
    this.swapiService.getPerson(fruitsalad).subscribe((person) => { 
      console.log(person);
    });
  };

  dataSource: MatTableDataSource<Person>;
  constructor(private swapiService: SWAPIService) {
    console.log(this.parentData)

  }
  columnNames = ['name', 'Name', 'birth_year', 'Gender', 'Homeworld'];

  ngOnInit() {
    /* this.swapiService.getPerson((people: Person[])=>{
       this.dataSource = new MatTableDataSource<Person>(people);
     });*/

  }
}

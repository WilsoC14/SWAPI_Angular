/*
import { Component, OnInit } from '@angular/core';
import { SWAPIService } from 'src/app/services/swapi.service';
import { swapiData } from 'src/app/models/swapiData';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  columnNames = ['name', 'birth_year']

  dataSource: MatTableDataSource<swapiData>
  constructor(private swapiService: SWAPIService) { }

  ngOnInit() {
    this.swapiService.getPerson().subscribe((person: swapiData[])=>{

    });
  }

}
*/
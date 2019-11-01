import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"
import { SWAPIService } from 'src/app/services/swapi.service';
import { Person } from 'src/app/Models/Person'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {

  private searchBar: FormGroup;
  public person: Person[] = [];
  constructor(private formBuilder: FormBuilder, private swapiService: SWAPIService) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.searchBar = this.formBuilder.group({
      /* Need to determine what goes in here
            if this were a Person search bar: would     name: new FormControl    go here?  */
      name: new FormControl
    })

  }
    onSubmit() {
        this.swapiService.getPerson(this.searchBar.value.name).subscribe(data => {this.person = data['results']});
          this.gotPerson(this.person[0]);
        
      }

      gotPerson(person)
      {
        console.log(person);
             
      }

      
   



}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"
import { SWAPIService } from 'src/app/services/swapi.service';


const Api_Url = 'https://swapi.co/api/'
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {

  private searchBar: FormGroup;
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
            /* call Api_Url here and append input to satisfy SWAPI query??? */
            /* first will get information displayed in the console log, then will work on displaying that information in the view"*/
       /* console.log(this.searchBar.value); */
        this.swapiService.getPerson(this.searchBar.value.name).subscribe((response) => this.gotPerson(response));
      }
      gotPerson(response)
      {
        console.log(response);
      }

}

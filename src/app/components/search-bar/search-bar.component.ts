import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"

const Api_Url = 'http https://swapi.co/api/'
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {

  private searchBar: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  createForm() {
    this.searchBar = this.formBuilder.group({
      /* Need to determine what goes in here
            if this were a Person search bar: would     name: new FormControl    go here?  */

    })

  }
    onSubmit() {
            /* call Api_Url here and append input to satisfy SWAPI query??? */
            /* first will get information displayed in the console log, then will work on displaying that information in the view"

    }
}

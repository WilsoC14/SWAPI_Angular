import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"
import { SWAPIService } from 'src/app/services/swapi.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  
  public name;
  private searchBar: FormGroup;
  constructor(private formBuilder: FormBuilder, private swapiService: SWAPIService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.searchBar = this.formBuilder.group({
       name: new FormControl
    })

  }
  onSubmit() {

    this.name = this.searchBar.value.name;
    /*this.activatedRoute.paramMap.subscribe(routeData => {
         console.log(this.searchBar.value)}); */
      
      
    };
     /* this.swapiService.getPerson(this.searchBar.value).subscribe(() => {
        this.router.navigate(['/people/person-index']); */
      
      /*since this is the search-bar component, i think it's best to just capture the value
      and route it to another component to call the service and connect with the api; single responsibility"
      /*instead of this code above, need to use ActivatedRoute, see module 13*/
          /*see about storing data on browser's local storage? */
  }

  
  /*
  onSubmit() {
        this.swapiService.getPerson(this.searchBar.value.name).subscribe(data => {this.person = data['results']});
          this.gotPerson(this.person[]);
        
      }

      gotPerson(person)
      {
        console.log(person);
             
      }
*/
      
   




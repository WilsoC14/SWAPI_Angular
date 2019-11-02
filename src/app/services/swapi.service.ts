import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router } from '@angular/router';

const Api_Url = 'https://swapi.co/api'

@Injectable({
  providedIn: 'root'
})
export class SWAPIService {

  constructor(private http: HttpClient, private router: Router) { }

  getPerson(name) {
    return this.http.get(`${Api_Url}/planets?search=${name}`);
    
     }
  
} 

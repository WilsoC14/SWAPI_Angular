import { Injectable } from '@angular/core';
import {swapiData} from '../Models/swapiData';
import { HttpClient } from '@angular/common/http';

const Api_Url = 'https://swapi.co/api'

@Injectable({
  providedIn: 'root'
})
export class SWAPIService {

  constructor(private http: HttpClient) { }

  getPerson(name) {
    return this.http.get(`${Api_Url}/people?search=${name}`)
  }
} 

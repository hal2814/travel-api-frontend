import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Destination } from './destination.model'
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class DestinationService {
  private apiUrl = 'http://localhost:3000/';
  data: Destination[];

  constructor(private http: Http) { }

  getData(params) {
    return this.http.get(this.apiUrl + params)
    .map((res: Response) => res.json())
  }

  getDestinations(params) {
    this.getData(params).subscribe(data => {
      this.data = data
    })
  }


  getDestinationByCountry(country){
    this.getDestinations("destinations?country=" + country)
  }
}

import { Component, OnInit } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Destination } from './destination.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/destinations';
  data: Destination[];
  title = 'Destinations';
  city;
  description;


  constructor(private http: Http) {
    this.getDestinations();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json())
  }

  getDestinations() {
    this.getData().subscribe(data => {
      console.log(data);
      data.forEach(function(destination) {
      });
      this.data = data
    })
  }

  ngOnInit() {
  }

}

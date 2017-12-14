import { Component, OnInit } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Destination } from './destination.model'
import { DestinationService } from './destination.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/';
  data: Destination[];
  title = 'Destinations';
  city;
  description;
  params = 'destinations';


  constructor(private http: Http,private router: Router, private destinationService: DestinationService) {
    this.getDestinations();
    this.getData(this.params);
  }

  goToDetailPage(clickedClient) {
   this.router.navigate(['client/' + clickedClient.id]);
 }




// EXAMPLE LOOP
//   getDestinations() {
//     this.getData().subscribe(data => {
//       console.log(data);
//       data.forEach(function(destination) {
//       });
//       this.data = data
//     })
//   }

  ngOnInit() {
  }

}

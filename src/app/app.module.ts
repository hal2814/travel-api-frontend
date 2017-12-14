import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { DestinationComponent } from './destination/destination.component';
import { DestinationDetailComponent } from './destination-detail/destination-detail.component';
import { DestinationService } from './destination.service';


@NgModule({
  declarations: [
    AppComponent,
    DestinationComponent,
    DestinationDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DestinationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

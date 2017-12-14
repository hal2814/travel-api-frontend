import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { DestinationDetailComponent } from './destination-detail/destination-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DestinationComponent
  },
  {
    path: 'destinations/:id',
    component: DestinationDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

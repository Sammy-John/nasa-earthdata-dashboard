import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NasaDataComponent } from './pages/nasa-data/nasa-data.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nasa-data', component: NasaDataComponent }
];

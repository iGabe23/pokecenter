import { Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { LocationsComponent } from './components/locations/locations.component';
import { EpisodesComponent } from './components/episodes/episodes.component';

export const routes: Routes = [
  { path: 'characters', component: CharactersComponent, title: 'Characters' },
  { path: 'locations', component: LocationsComponent, title: 'Locations' },
  { path: 'episodes', component: EpisodesComponent, title: 'Episodes' },
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: '**', redirectTo: 'characters', pathMatch: 'full' },
];

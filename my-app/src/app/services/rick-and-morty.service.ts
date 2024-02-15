import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  constructor() {}

  httpClient = inject(HttpClient);
  // La URL principal del API, da paso a los personajes, lugares y episodios.
  API_URL = 'https://rickandmortyapi.com/api';

  getCharacters() {
    return this.httpClient.get(`${this.API_URL}/${'character'}`);
  }
  getLocations() {
    return this.httpClient.get(`${this.API_URL}/${'location'}`);
  }
  getEpisodes() {
    return this.httpClient.get(`${this.API_URL}/${'episode'}`);
  }
}

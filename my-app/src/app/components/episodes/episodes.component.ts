import { Component, inject } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css',
})
export class EpisodesComponent {
  //Almacenando los servicios en una propiedad
  rickMortyServices = inject(RickAndMortyService);
  //Propiedad de los personajes
  episodes: any = [];

  //Lifecycle hook que se llama depués de que el componente haya iniciado, para mostrar el contenido del API
  ngOnInit() {
    this.loadEpisodes();
  }

  //Función para cargar los personajes
  loadEpisodes() {
    this.rickMortyServices.getEpisodes().subscribe({
      next: (res: any) => {
        this.episodes = res.results;
        console.log(res.results);
      },
      error: (error) => console.log('Error fetching characters', error),
    });
  }
}

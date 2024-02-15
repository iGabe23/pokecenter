import { Component, inject } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  //Almacenando los servicios en una propiedad
  rickMortyServices = inject(RickAndMortyService);
  //Propiedad de los personajes
  characters: any = [];

  //Lifecycle hook que se llama depués de que el componente haya iniciado, para mostrar el contenido del API
  ngOnInit() {
    this.loadCharacters();
  }

  //Función para cargar los personajes
  loadCharacters() {
    this.rickMortyServices.getCharacters().subscribe({
      next: (res: any) => {
        this.characters = res.results;
        console.log(res.results);
      },
      error: (error) => console.log('Error fetching characters', error),
    });
  }
}

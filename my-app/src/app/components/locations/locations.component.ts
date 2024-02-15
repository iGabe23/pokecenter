import { Component, inject } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css',
})
export class LocationsComponent {
  //Almacenando los servicios en una propiedad
  rickMortyServices = inject(RickAndMortyService);
  //Propiedad de los personajes
  locations: any = [];

  //Lifecycle hook que se llama depués de que el componente haya iniciado, para mostrar el contenido del API
  ngOnInit() {
    this.loadLocations();
  }

  //Función para cargar los personajes
  loadLocations() {
    this.rickMortyServices.getLocations().subscribe({
      next: (res: any) => {
        this.locations = res.results;
        console.log(res.results);
      },
      error: (error) => console.log('Error fetching characters', error),
    });
  }
}

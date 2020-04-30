import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { ServicioPeliculasService } from 'src/app/servicios/servicio-peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  listadoPeliculas:Array<Pelicula>

  constructor(private servicio:ServicioPeliculasService) { }

  ngOnInit(): void {
    this.listadoPeliculas = this.servicio.TraerPeliculas()
  }

}

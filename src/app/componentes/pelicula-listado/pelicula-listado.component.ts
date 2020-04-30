import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { ServicioPeliculasService } from 'src/app/servicios/servicio-peliculas.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {

  listadoPeliculas:Array<Pelicula>

  constructor(private servicio : ServicioPeliculasService) { }

  ngOnInit(): void {
    this.listadoPeliculas = this.servicio.TraerPeliculas()
  }

}

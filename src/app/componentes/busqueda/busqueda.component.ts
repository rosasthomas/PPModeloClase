import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { ServicioPeliculasService } from 'src/app/servicios/servicio-peliculas.service';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  peliDetalle:Pelicula
  listadoPeliculas:Array<Pelicula>
  listadoActores:Array<Actor>
  constructor(private servicio:ServicioPeliculasService) { }

  ngOnInit(): void {
    this.listadoPeliculas = this.servicio.TraerPeliculas()
    this.listadoActores = this.servicio.TraerActores()
  }

  peliParaDetalle(peli:Pelicula){
    this.peliDetalle = peli;
  }

  Borrar(peli:Pelicula){
    let index = this.listadoPeliculas.indexOf(peli)
    this.listadoPeliculas.splice(index, 1);

    this.servicio.BorrarPelicula(this.listadoPeliculas);
  }

}

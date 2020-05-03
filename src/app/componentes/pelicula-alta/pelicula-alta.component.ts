import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ServicioPeliculasService } from 'src/app/servicios/servicio-peliculas.service';
import { Pelicula } from 'src/app/clases/pelicula';
import * as $ from 'jquery'

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  listadoActores:Array<Actor>
  pelicula = new Pelicula()
  id = 4;
  actores: Array<Actor>=[]

  constructor(private servicio:ServicioPeliculasService) {
   }

  ngOnInit(): void {
    this.listadoActores = this.servicio.TraerActores()

  }

  agregar(){
    this.pelicula.id = this.id
    this.id++
    this.pelicula.nombre = $("#nombre").val()
    this.pelicula.tipo = $("#tipo").val()
    this.pelicula.fechaEstreno = $("#fecha").val()
    this.pelicula.cantidadPublico = $("#publico").val()
    this.pelicula.fotoPelicula = '../../../assets/batman.jpg'
    this.pelicula.actores = this.actores
    this.servicio.AgregarPelicula(this.pelicula)
  }

  agregarActor(actor:Actor){
    this.actores.push(actor)
  }
}

import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ServicioPeliculasService } from 'src/app/servicios/servicio-peliculas.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

  listadoActores:Array<Actor>

  constructor(private servicio : ServicioPeliculasService) { }

  ngOnInit(): void {
    this.listadoActores = this.servicio.TraerActores()
  }

}

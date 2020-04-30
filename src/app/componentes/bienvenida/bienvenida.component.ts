import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  harcodePeliculas:Array<Pelicula> = [
    {id: 1, nombre: 'Rapido y Furiosos', tipo: 'otros', fechaEstreno: '10/05/2000', cantidadPublico: 3000000, fotoPelicula: '../../../assets/rapidoFurioso.jpg'},
    {id: 2, nombre: 'DeadPool', tipo: 'comedia', fechaEstreno: '30/03/2010', cantidadPublico: 56000000, fotoPelicula: '../../../assets/deadpool.jpg'},
    {id: 3, nombre: 'Batman', tipo: 'otros', fechaEstreno: '06/11/1997', cantidadPublico: 400000, fotoPelicula: '../../../assets/batman.jpg'}
  ]
  constructor(private route:Router) {
    localStorage.setItem('peliculas', JSON.stringify(this.harcodePeliculas))
   }

  ngOnInit(): void {
  }
}

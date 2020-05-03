import { Injectable } from '@angular/core';
import { Pelicula } from '../clases/pelicula';
import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculasService {

  harcodePeliculas:Array<Pelicula> = [
    {id: 1, nombre: 'Rapido y Furiosos', tipo: 'otros', fechaEstreno: '10/05/2000', cantidadPublico: 3000000, fotoPelicula: '../../../assets/rapidoFurioso.jpg', actores: [{id: 3, nombre: 'Oscar', apellido: 'Perez', sexo: 'Masculino', fechaNacimiento: '04/06/2000', foto: '../../../assets/batman.jpg'}]},
    {id: 2, nombre: 'DeadPool', tipo: 'comedia', fechaEstreno: '30/03/2010', cantidadPublico: 56000000, fotoPelicula: '../../../assets/deadpool.jpg', actores:[{id: 1, nombre: 'Luis', apellido: 'Martinez', sexo: 'Masculino', fechaNacimiento: '22/02/1996', foto: '../../../assets/batman.jpg'}]},
    {id: 3, nombre: 'Batman', tipo: 'otros', fechaEstreno: '06/11/1997', cantidadPublico: 400000, fotoPelicula: '../../../assets/batman.jpg', actores: [{id: 2, nombre: 'Carla', apellido: 'Suarez', sexo: 'Femenino', fechaNacimiento: '12/11/1986', foto: '../../../assets/batman.jpg'}]}
  ]

  harcodeActores:Array<Actor> = [
    {id: 1, nombre: 'Luis', apellido: 'Martinez', sexo: 'Masculino', fechaNacimiento: '22/02/1996', foto: '../../../assets/batman.jpg'},
    {id: 2, nombre: 'Carla', apellido: 'Suarez', sexo: 'Femenino', fechaNacimiento: '12/11/1986', foto: '../../../assets/batman.jpg'},
    {id: 3, nombre: 'Oscar', apellido: 'Perez', sexo: 'Masculino', fechaNacimiento: '04/06/2000', foto: '../../../assets/batman.jpg'},
  ]

  constructor() { 
        localStorage.setItem('peliculas', JSON.stringify(this.harcodePeliculas))
        localStorage.setItem('actores', JSON.stringify(this.harcodeActores))
  }

  TraerPeliculas(){
    return JSON.parse(localStorage.getItem('peliculas'))
  }

  BorrarPelicula(peli){
    localStorage.setItem('peliculas', JSON.stringify(peli))

  }

  TraerActores(){
    return JSON.parse(localStorage.getItem('actores'))
  }

  AgregarPelicula(peli:Pelicula){
    let listado:Array<Pelicula> = this.TraerPeliculas()
    listado.push(peli)
    localStorage.setItem('peliculas', JSON.stringify(listado))
  }
}


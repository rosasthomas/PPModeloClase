import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculasService {

  constructor() { }

  TraerPeliculas(){
    return JSON.parse(localStorage.getItem('peliculas'))
  }
}


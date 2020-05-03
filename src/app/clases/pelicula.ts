import { Actor } from './actor';

export class Pelicula {
    id:number;
    nombre:string;
    tipo:string;
    fechaEstreno:string;
    cantidadPublico:number;
    fotoPelicula:string;
    actores: Array<Actor>
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() input_detallesPelicula:Pelicula;
  @Output() output_detallesPelicula:EventEmitter<any> = new EventEmitter<any>()
  @Input()  actores_detallePelicula:Boolean

  constructor() { }

  ngOnInit(): void {
  }

  limpiar(){
    this.input_detallesPelicula = null;
  }

  Borrar(){
    this.output_detallesPelicula.emit(this.input_detallesPelicula)
  }

}

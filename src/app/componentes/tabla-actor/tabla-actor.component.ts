import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

  @Input() input_tablaActores:Array<Actor>
  @Output() output_tablaActores:EventEmitter<any> = new EventEmitter<any>()
  @Input() boton_tablaActores:boolean
  constructor() { }

  ngOnInit(): void {
  }

  detalles(actor:Actor){
    this.output_tablaActores.emit(actor);
  }
}

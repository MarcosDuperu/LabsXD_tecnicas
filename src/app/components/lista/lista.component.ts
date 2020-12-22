import { Component, OnInit } from '@angular/core';
import { Persona } from '../../Entidad/entidad';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {


 

  lista: Array<Persona> = [
    {Name: "Marcos", LastName: "Duperu", Edad: 23,Biography: "estudio derecho y programacion, trabaja en ventas", Telefonos: ["2617016631", "4911965"]},
    {Name: "Martin", LastName: "Silva", Edad: 43,Biography: "termino la secundaria y trabaja en servicio de transporte publico", Telefonos: ["2613994862", "4913904"]},
    {Name: "Miguel", LastName: "Devia", Edad: 77,Biography: "no termino sus estudios y es pensionado", Telefonos: ["2615539683", "4489638"]},
    {Name: "Ruben", LastName: "Aguirre", Edad: 90,Biography: "termino sus estudios secundarios fue contador y es jubilado", Telefonos: ["2612638947", "4956969"]},
];


  constructor() { }

  ngOnInit() {
  }

}

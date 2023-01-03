import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-formulario-jugador',
  templateUrl: './formulario-jugador.component.html',
  styleUrls: ['./formulario-jugador.component.css']
})
export class FormularioJugadorComponent implements OnInit {
jugador = {
  nombre:"",
  numero: 0,
  sueldo: 0,
  equipo: 0

}
equipos: any;
constructor(private backend:BackendService){}


  ngOnInit(): void {
    this.backend.getEquipos().subscribe((equipos) =>{
      this.equipos = equipos
      
    })
  }

  postJugador() {
    this.backend.postJugadores(this.jugador).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Registro guardado',
        text: `El equipo ${this.jugador.nombre} se ha guardado correctamente`
      }).then(() => {
        location.reload();
      });
    });

  }
}
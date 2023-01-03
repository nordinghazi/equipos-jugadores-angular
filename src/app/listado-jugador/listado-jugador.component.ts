import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-listado-jugador',
  templateUrl: './listado-jugador.component.html',
  styleUrls: ['./listado-jugador.component.css']
})
export class ListadoJugadorComponent {

  jugadores: any;

  constructor(private backend: BackendService) {
  }

  ngOnInit(): void {
    this.getJugadores();
  }

  getJugadores() {
    this.backend.getJugadores().subscribe((jugadores) => {
      this.jugadores = jugadores;
      this.jugadores.sort((a: any, b: any) => a.nombre.localeCompare(b.nombre));
      console.log(this.jugadores);
    })

  }
  borrarJugador(jugador: any) {
    this.backend.deleteEquipo(jugador.id).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Registro Borrado',
        text: `El equipo ${jugador.nombre} Se ha borrado correctamente !`
      }).then(() => {

        this.getJugadores();

      });

    });

  }
}


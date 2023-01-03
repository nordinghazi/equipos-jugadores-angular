import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-listado-equipos',
  templateUrl: './listado-equipos.component.html',
  styleUrls: ['./listado-equipos.component.css']
})
export class ListadoEquiposComponent {
  equipos: any;

  constructor(private backend: BackendService) {
  }

  ngOnInit(): void {
    this.getEquipos();
  }

  getEquipos() {
    this.backend.getEquipos().subscribe((equipos) => {
      this.equipos = equipos;
      this.equipos.sort((a: any, b: any) => a.nombre.localeCompare(b.nombre));
      console.log(this.equipos);
    })

  }
  borrarEquipo(equipo: any) {
    this.backend.deleteEquipo(equipo.id).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Registro Borrado',
        text: `El equipo ${equipo.nombre} Se ha borrado correctamente !`
      }).then(() => {

        this.getEquipos();

      });

    });

  }
}

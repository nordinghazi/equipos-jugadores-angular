import { Component } from '@angular/core';
import { BackendService } from '../services/backend.service';
import Swal from 'sweetalert2';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-formulario-equipo',
  templateUrl: './formulario-equipo.component.html',
  styleUrls: ['./formulario-equipo.component.css']
})
export class FormularioEquipoComponent {

  constructor(private backend:BackendService){
  }
  
  equipo = {
    nombre: "",
    ciudad: "",
    fechaCreacion: ""
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';
  ngOnInit(): void {
  }

  postEquipo(){
    console.log(this.equipo)
    this.backend.postEquipos(this.equipo).subscribe(()=> {
      Swal.fire({
        icon:'success',
        title:'Registro guardado',
        text: `El equipo ${this.equipo.ciudad} se ha guardado correctamente`
      })
      
    })
  }

  fileChangeEvent(event: any): void {

    this.imageChangedEvent = event;

}

imageCropped(event: ImageCroppedEvent) {

    this.croppedImage = event.base64;
    this.equipo.nombre= this.croppedImage;

}

}

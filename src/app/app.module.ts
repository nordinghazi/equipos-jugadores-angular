import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AppComponent } from './app.component';
import { ListadoEquiposComponent } from './listado-equipos/listado-equipos.component';
import { FormularioEquipoComponent } from './formulario-equipo/formulario-equipo.component';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { FormularioJugadorComponent } from './formulario-jugador/formulario-jugador.component';
import { ListadoJugadorComponent } from './listado-jugador/listado-jugador.component';
const APP_ROUTES: Route[] = [

  { path: '', component: ListadoEquiposComponent },
  { path: 'insertar-equipo', component: FormularioEquipoComponent },
  { path: 'listado-equipos', component: ListadoEquiposComponent },
  { path: 'insertar-jugador', component: FormularioJugadorComponent },
  { path: 'listado-jugador', component: ListadoJugadorComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ListadoEquiposComponent,
    FormularioEquipoComponent,
    FormularioJugadorComponent,
    ListadoJugadorComponent
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES, { initialNavigation: 'enabledBlocking', onSameUrlNavigation: 'reload' }),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

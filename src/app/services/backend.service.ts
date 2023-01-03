import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getEquipos() {
    return this.http.get(`${SERVER}equipos`);
  }

  postEquipos(equipo: any) {
    return this.http.post(`${SERVER}equipos`, equipo)
  }
  deleteEquipo(id: number) {
    return this.http.delete(`${SERVER}equipos/${id}`)
  }

  getJugadores() {
    return this.http.get(`${SERVER}jugadores`);
  }

  postJugadores(jugador: any) {
    return this.http.post(`${SERVER}jugadores`, jugador)
  }
  deleteJugador(id: number) {
    return this.http.delete(`${SERVER}jugadores/${id}`)
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario.service';
import { WebsocketService } from './websocket.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService {

  constructor(private http: HttpClient,  private wsService: WebsocketService, private usuarioService: UsuarioService) { }

  obtenerEtiquetas() {
    return new Promise<boolean>(resolve => {
      this.http.get(`${URL}/etiquetas`)
        .subscribe(resp => {
          if (resp['etiquetas']) {
            resolve(resp['etiquetas']);
          } else {
            resolve(false);
          }
        });
    });
  }

  getEtiquetas() {
    this.wsService.emit('get-etiquetas');
    return this.wsService.listen('etiquetas');
  }

  async borrarEtiqueta(idEtiqueta: string) {

    await this.usuarioService.cargarToken();

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise(resolve => {
      this.http.delete(`${URL}/etiquetas/${idEtiqueta}`, { headers })
        .subscribe(async resp => {
          if (resp['ok']) {
            resolve(true);
          } else {
            resolve(false);
          }
        }, (err) => {
          resolve(err);
        });
    });
  }

  getEtiquetasBorradas() {
    this.wsService.emit('get-etiquetas-borradas');
    return this.wsService.listen('etiquetas-borradas');
  }

}

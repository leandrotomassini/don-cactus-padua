import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario.service';
import { WebsocketService } from './websocket.service';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient, private wsService: WebsocketService, private usuarioService: UsuarioService) { }

  obtenerCarrito() {
    return new Promise<boolean>(resolve => {
      this.http.get(`${URL}/carrito`)
        .subscribe(resp => {
          if (resp['ok']) {
            resolve(resp['carrito']);
          } else {
            resolve(false);
          }
        });
    });
  }

  async agregarProductoCarrito(producto) {
 
    await this.usuarioService.cargarToken();

    const data = {
      "producto": producto
    }

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    return new Promise(resolve => {
      this.http.post(`${URL}/carrito`, data, { headers })
        .subscribe(resp => {
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

  borrarProductoCarrito() {

  }


}

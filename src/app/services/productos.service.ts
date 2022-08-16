import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario.service';

import { WebsocketService } from './websocket.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProductosService implements OnInit {

  constructor(private wsService: WebsocketService, private http: HttpClient, private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  getProductos() {
    this.wsService.emit('get-productos');
    return this.wsService.listen('productos');
  }

  otenerTituloEtiqueta(etiquetaNombre: string = '') {
    return new Promise<boolean>(resolve => {
      this.http.get(`${URL}/etiquetas/${etiquetaNombre}`)
        .subscribe(resp => {
          resolve(resp[0].titulo);
        });
    });
  }

  async guardarProducto(producto) {

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    return new Promise(resolve => {
      this.http.post(`${URL}/productos`, producto, { headers })
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
}





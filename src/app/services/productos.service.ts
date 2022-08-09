import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

import { WebsocketService } from './websocket.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProductosService implements OnInit {

  constructor(private wsService: WebsocketService, private http: HttpClient) { }

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
}





import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario.service';
import { WebsocketService } from './websocket.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProductosService implements OnInit {

  token = '';

  constructor(private wsService: WebsocketService, private storage: Storage, private http: HttpClient, private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  getProductos() {
    this.wsService.emit('get-productos');
    return this.wsService.listen('productos');
  }

  getProducto(idProducto: string) {
    return new Promise(resolve => {
      this.http.get(`${URL}/productos/${idProducto}`)
        .subscribe(resp => {
          if (resp['ok']) {
            resolve(resp);
          } else {
            resolve(false);
          }
        }, (err) => {
          resolve(err);
        });
    });
  }

  getProductosBorrados() {
    this.wsService.emit('get-productos-borrados');
    return this.wsService.listen('productos-borrados');
  }

  getProductosSinStock() {
    this.wsService.emit('get-productos-sin-stock');
    return this.wsService.listen('productos-sin-stock');
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

    await this.usuarioService.cargarToken();


    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    return new Promise(resolve => {
      this.http.post(`${URL}/productos`, producto, { headers })
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

  async borrarProducto(idProducto: string) {

    await this.usuarioService.cargarToken();

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise(resolve => {
      this.http.delete(`${URL}/productos/${idProducto}`, { headers })
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

  async cargarToken() {
    this.token = await this.storage.get('token') || null;
  }

  async editarProducto(producto: any) {

    await this.usuarioService.cargarToken();

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    return new Promise(resolve => {
      this.http.put(`${URL}/productos/${producto._id}`, producto, { headers })
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

  getProductoSlug(slug: string) {
    return new Promise(resolve => {
      this.http.get(`${URL}/productos/slug/${slug}`)
        .subscribe(producto => {
          resolve(producto);
        });
    });
  }
}





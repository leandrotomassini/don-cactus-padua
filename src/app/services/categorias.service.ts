import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario.service';
import { WebsocketService } from './websocket.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient, private wsService: WebsocketService, private usuarioService: UsuarioService) { }

  obtenerCategorias() {
    return new Promise<boolean>(resolve => {
      this.http.get(`${URL}/categorias`)
        .subscribe(resp => {
          if (resp['categorias']) {
            resolve(resp['categorias']);
          } else {
            resolve(false);
          }
        });
    });
  }

  getCategorias() {
    this.wsService.emit('get-categorias');
    return this.wsService.listen('categorias');
  }

  async borrarCategoria(idCategoria: string) {

    await this.usuarioService.cargarToken();

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise(resolve => {
      this.http.delete(`${URL}/categorias/${idCategoria}`, { headers })
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

  getCategoriasBorradas() {
    this.wsService.emit('get-categorias-borradas');
    return this.wsService.listen('categorias-borradas');
  }

  async crearCategoria(categoria){

    await this.usuarioService.cargarToken();


    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    return new Promise(resolve => {
      this.http.post(`${URL}/categorias`, categoria, { headers })
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
}

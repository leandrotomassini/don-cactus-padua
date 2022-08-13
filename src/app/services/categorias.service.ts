import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {



  constructor(private http: HttpClient) { }

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

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService {

  constructor(private http: HttpClient) { }

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

}

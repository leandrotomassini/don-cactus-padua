import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RespuestaProductos } from '../interfaces/producto';

import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get<RespuestaProductos>(`${URL}/api/productos`);
  }

}

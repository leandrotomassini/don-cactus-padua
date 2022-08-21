import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { UsuarioService } from './usuario.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  productosCarrito: any;

  constructor(private usuarioService: UsuarioService, private http: HttpClient) { }

  async crearPedido(productos) {

    await this.usuarioService.cargarToken();

    const pedido = {
      productos: productos,
      aprobado: false,
      entregado: false,
      estado: true,
      collection_id: "",
      collection_status: "",
      payment_id: "",
      status: "",
      external_reference: "",
      merchant_order_id: "",
      preference_id: "",
      site_id: "",
      processing_mode: "",
      merchant_account_id: ""
    }

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise(resolve => {
      this.http.post(`${URL}/pedidos/nuevopedido`, pedido, { headers })
        .subscribe((resp: any) => {
          if (resp['ok']) {
            resolve(resp.pedido._id);
          } else {
            resolve(false);
          }
        }, (err) => {
          resolve(err);
        });
    });
  }
}

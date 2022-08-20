import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { CarritoService } from 'src/app/services/carrito.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  productos: any;
  productosSubscripcion: Subscription;
  total = 0;

  constructor(private carritoService: CarritoService, private usuarioService: UsuarioService) { }

  async ngOnInit() {

    await this.usuarioService.cargarToken();

    this.productosSubscripcion = this.carritoService.obtenerProductosCarrito(this.usuarioService.usuario.uid)
      .subscribe(productos => {
        this.productos = productos;
        this.calcularTotal();
      });
  }

  calcularTotal() {
    this.total = 0;

    this.productos.forEach(producto => {
      this.total = this.total + producto.producto.precio
    });
  }

  borrarProducto(idCarrito) {
    this.carritoService.borrarProductoCarrito(idCarrito).then().catch();
  }

  pagar() {
    this.carritoService.pagar(this.productos).then((resp: any) => {
      let link = resp.linkPago;
      if( link!= undefined){
        window.open(link, "_blank"); 
      }
    }).catch();
  }
}

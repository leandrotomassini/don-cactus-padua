import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { CarritoService } from 'src/app/services/carrito.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit, OnDestroy {

  productos: any;
  productosSubscripcion: Subscription;
  total = 0;

  constructor(private carritoService: CarritoService, private usuarioService: UsuarioService, private pedidosService: PedidosService) { }

  async ngOnInit() {

    await this.usuarioService.cargarToken();

    this.productosSubscripcion = this.carritoService.obtenerProductosCarrito(this.usuarioService.usuario.uid)
      .subscribe(productos => {
        this.productos = productos;
        this.calcularTotal();
      });
  }

  ngOnDestroy(): void {
    this.productosSubscripcion.unsubscribe();
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

  async  pagar() {

    // Primero creo un pedido
    let pedidoId;
    await this.pedidosService.crearPedido(this.productos).then(resp => pedidoId = resp).catch();

    console.log(pedidoId)
    // Ahora genero un link de mercado pago y te llevo a la web de MP
    this.carritoService.pagar(this.productos, pedidoId).then((resp: any) => {

      let link = resp.linkPago;

      if (link != undefined) {
        window.open(link, "_blank");
      }

    }).catch();
  }
}

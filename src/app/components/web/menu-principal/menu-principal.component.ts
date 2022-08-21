import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CarritoService } from 'src/app/services/carrito.service';

import { ProductosService } from 'src/app/services/productos.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
})
export class MenuPrincipalComponent implements OnInit, OnDestroy {


  productosSubscripcion: Subscription;
  carritoSubscripcion: Subscription;
  productos: any;
  carrito: any;

  mostrarBuscadorCss: boolean = false;
  mostrarProductosCss: boolean = true;

  textoBuscar: any;
  notificacion: boolean = false;

  constructor(private productosService: ProductosService, private navCtrl: NavController, private carritoService: CarritoService, private usuarioService: UsuarioService) { }

  async ngOnInit() {

    // await this.usuarioService.validaToken();

    this.productosSubscripcion = await this.productosService
      .getProductos()
      .subscribe(productos => {
        this.productos = productos;
      });

    this.carritoSubscripcion = await this.carritoService
      .obtenerNotificacionProductosCarrito(this.usuarioService.usuario.uid)
      .subscribe(productos => {
        this.carrito = productos;
        this.mostrarNotificacionCarrito();
      });

  }

  ngOnDestroy(): void {
    this.productosSubscripcion.unsubscribe();
    this.carritoSubscripcion.unsubscribe();
  }

  async onSearchChange($event) {
    let textoBuscar = $event.detail.value;
    this.textoBuscar = textoBuscar;

    if (textoBuscar != '') {
      this.mostrarBuscadorCss = true;
      this.mostrarProductosCss = false;
    } else {
      this.mostrarBuscadorCss = false;
      this.mostrarProductosCss = true;
    }
  }

  verProducto(productoUrl) {
    this.navCtrl.navigateRoot(`/${productoUrl}`);
  }

  mostrarNotificacionCarrito() {
    if (this.carrito.length > 0) {
      this.notificacion = true;
    } else {
      this.notificacion = false;
    }
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
})
export class MenuPrincipalComponent implements OnInit, OnDestroy {


  productosSubscripcion: Subscription;
  productos: any;

  mostrarBuscadorCss: boolean = false;
  mostrarProductosCss: boolean = true;

  textoBuscar: any;


  constructor(private productosService: ProductosService, private navCtrl: NavController) { }

  async ngOnInit() {
    this.productosSubscripcion = await this.productosService
      .getProductos()
      .subscribe(productos => {
        this.productos = productos;
      });
  }

  ngOnDestroy(): void {
    this.productosSubscripcion.unsubscribe();
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

}

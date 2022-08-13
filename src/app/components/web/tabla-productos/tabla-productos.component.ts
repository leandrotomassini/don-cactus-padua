import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { NuevoProductoPage } from 'src/app/pages/nuevo-producto/nuevo-producto.page';

import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss'],
})
export class TablaProductosComponent implements OnInit, OnDestroy {

  productos: any;
  productosSubscripcion: Subscription;
  textoBuscar: string = '';

  constructor(private productosService: ProductosService, private modalController: ModalController) { }

  ngOnInit() {
    this.productosSubscripcion = this.productosService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }

  ngOnDestroy(): void {
    this.productosSubscripcion.unsubscribe();
  }

  onSearchChange($event) {
    this.textoBuscar = $event.detail.value;
  }

  async agregarProducto() {

    const modal = await this.modalController.create({
      component: NuevoProductoPage
    });

    await modal.present();
  }
}

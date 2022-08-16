import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { EditarProductoPage } from 'src/app/pages/editar-producto/editar-producto.page';
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

    this.productosSubscripcion = this.productosService.getProductosBorrados().subscribe(productos => {
      this.productos = productos;
    });

    this.productosSubscripcion = this.productosService.getProductosSinStock().subscribe(productos => {
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

  async editarProducto(productoEditar) {
    
    const modal = await this.modalController.create({
      component: EditarProductoPage,
      componentProps: {
        productoEditar
      }
    });

    await modal.present();
  }

  borrarProducto(idProducto: string) {
    this.productosService.borrarProducto(idProducto).then().catch();
  }


  segmentChanged($event) {
    if ($event.detail.value == 'borrados') {
      this.productosService.getProductosBorrados();
    }

    if ($event.detail.value == 'publicados') {
      this.productosService.getProductos();
    }
    if ($event.detail.value == 'sin-stock') {
      this.productosService.getProductosSinStock();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductosData } from 'src/app/pages/growshop/growshop.page';
import { ProductoPage } from 'src/app/pages/producto/producto.page';

@Component({
  selector: 'app-seis-productos',
  templateUrl: './seis-productos.component.html',
  styleUrls: ['./seis-productos.component.scss'],
})
export class SeisProductosComponent implements OnInit, ProductosData {

  data: any;
  titulo: string = '';

  constructor(public modalController: ModalController) {

  }


  ngOnInit() {
    this.titulo = this.data.shift();
  }

  async verProducto(producto) {
    const modal = await this.modalController.create({
      component: ProductoPage,
      cssClass:'transparent-modal',
      componentProps: {
        producto
      }
    });

    await modal.present();
  }
}

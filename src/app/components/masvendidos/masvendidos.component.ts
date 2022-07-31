import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ProductoPage } from 'src/app/pages/producto/producto.page';

@Component({
  selector: 'app-masvendidos',
  templateUrl: './masvendidos.component.html',
  styleUrls: ['./masvendidos.component.scss'],
})
export class MasvendidosComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }


  async mostrarProducto(id: string) {

    const modal = await this.modalCtrl.create({
      component: ProductoPage,
      componentProps: {
        nombre: 'Lampara',
        id
      }
    });

    await modal.present();

    const {data} = await modal.onDidDismiss();
    console.log(data);
  }


}

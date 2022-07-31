import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  
  config: SwiperOptions = {
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true
  };
 
  @Input() nombre: string;
  @Input() id: string;

  constructor(private modalCtrl: ModalController) { }


  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos(){
    this.modalCtrl.dismiss({
      nombre: 'disponible',
      precio: 200
    })
  }

  
}

import { AfterContentChecked, Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination, SwiperOptions, Autoplay, Keyboard } from 'swiper';

SwiperCore.use([Pagination, Autoplay, Keyboard]);

@Component({
  selector: 'app-slidercategorias',
  templateUrl: './slidercategorias.component.html',
  styleUrls: ['./slidercategorias.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlidercategoriasComponent implements AfterContentChecked  {

  @ViewChild('swiper') swiper: SwiperComponent;

  config: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 50,
    navigation: false,
    autoplay: {
      delay: 2000,
    },
  };
  
  constructor() { }

  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }
}

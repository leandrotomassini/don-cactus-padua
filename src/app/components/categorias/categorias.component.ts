import { AfterContentChecked, Component, ViewChild, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Autoplay, Keyboard, Mousewheel, Navigation, Pagination, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoriasComponent implements AfterContentChecked {

  @ViewChild('swiper') swiper: SwiperComponent;

  config: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 5,
    loop: true,
    autoplay: true
  };

  constructor() { }

  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }
}

import { AfterContentChecked, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptions } from 'swiper';

import SwiperCore, {
  Pagination,
  Autoplay,
  Navigation
} from 'swiper';

SwiperCore.use([Pagination, Autoplay, Navigation]);
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements AfterContentChecked {

  @ViewChild('swiper') swiper: SwiperComponent;

  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 5,
    pagination: true,
    navigation: true,
    autoplay: {
      delay: 3000,
    },
  };

  constructor() { }



  ngAfterContentChecked(): void {

    if (this.swiper) {
      this.swiper.updateSwiper({});
    }


  }

  swiperSlideChanged(e) {
    console.log('Cambios');
  }
}

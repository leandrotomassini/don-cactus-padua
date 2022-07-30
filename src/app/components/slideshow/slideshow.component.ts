import { AfterContentChecked, Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination, SwiperOptions, Autoplay, Keyboard } from 'swiper';

SwiperCore.use([Pagination, Autoplay, Keyboard]);

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlideshowComponent implements AfterContentChecked  {
  
  @ViewChild('swiper') swiper: SwiperComponent;

  config: SwiperOptions = {
    slidesPerView: 1,
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

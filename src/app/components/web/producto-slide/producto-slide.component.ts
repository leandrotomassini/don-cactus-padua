import { AfterContentChecked, Component, Input, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-producto-slide',
  templateUrl: './producto-slide.component.html',
  styleUrls: ['./producto-slide.component.scss'],
})
export class ProductoSlideComponent implements AfterContentChecked, OnInit {
  @ViewChild('swiper') swiper: SwiperComponent;
  @Input() producto: any;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    loop: true,
    autoplay: true
  };

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }
}

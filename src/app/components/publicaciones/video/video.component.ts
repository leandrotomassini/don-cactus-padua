import { Component, OnInit } from '@angular/core';

import { ProductosData } from 'src/app/pages/growshop/growshop.page';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit, ProductosData {

  data: any;
  titulo: any;
  
  constructor() { }
  
  ngOnInit() {}

}

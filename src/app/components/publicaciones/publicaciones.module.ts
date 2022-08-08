import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CuatroProductosComponent } from './cuatro-productos/cuatro-productos.component';
import { TresProductosComponent } from './tres-productos/tres-productos.component';
import { UnProductoComponent } from './un-producto/un-producto.component';
import { VideoComponent } from './video/video.component';
import { SeisProductosComponent } from './seis-productos/seis-productos.component';

@NgModule({
  declarations: [
    SeisProductosComponent,
    CuatroProductosComponent,
    TresProductosComponent,
    UnProductoComponent,
    VideoComponent
  ],
  exports: [
    SeisProductosComponent,
    CuatroProductosComponent,
    TresProductosComponent,
    UnProductoComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class PublicacionesModule { }

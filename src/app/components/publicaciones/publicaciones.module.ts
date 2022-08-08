import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CuatroProductosComponent } from './cuatro-productos/cuatro-productos.component';

@NgModule({
  declarations: [
    CuatroProductosComponent
  ],
  exports: [
    CuatroProductosComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class PublicacionesModule { }

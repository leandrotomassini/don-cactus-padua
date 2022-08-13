import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoProductoPageRoutingModule } from './nuevo-producto-routing.module';

import { NuevoProductoPage } from './nuevo-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoProductoPageRoutingModule
  ],
  declarations: [NuevoProductoPage]
})
export class NuevoProductoPageModule {}

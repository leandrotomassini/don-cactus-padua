import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaCategoriaPageRoutingModule } from './nueva-categoria-routing.module';

import { NuevaCategoriaPage } from './nueva-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaCategoriaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NuevaCategoriaPage]
})
export class NuevaCategoriaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaEtiquetaPageRoutingModule } from './nueva-etiqueta-routing.module';

import { NuevaEtiquetaPage } from './nueva-etiqueta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaEtiquetaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NuevaEtiquetaPage]
})
export class NuevaEtiquetaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarEtiquetaPageRoutingModule } from './editar-etiqueta-routing.module';

import { EditarEtiquetaPage } from './editar-etiqueta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarEtiquetaPageRoutingModule
  ],
  declarations: [EditarEtiquetaPage]
})
export class EditarEtiquetaPageModule {}

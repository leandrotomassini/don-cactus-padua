import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarProductoPageRoutingModule } from './editar-producto-routing.module';

import { EditarProductoPage } from './editar-producto.page';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarProductoPageRoutingModule,
    NgxEditorModule,
    ReactiveFormsModule
  ],
  declarations: [EditarProductoPage]
})
export class EditarProductoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlpedidosPageRoutingModule } from './controlpedidos-routing.module';

import { ControlpedidosPage } from './controlpedidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlpedidosPageRoutingModule
  ],
  declarations: [ControlpedidosPage]
})
export class ControlpedidosPageModule {}

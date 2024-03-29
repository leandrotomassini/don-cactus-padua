import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrowshopPageRoutingModule } from './growshop-routing.module';

import { GrowshopPage } from './growshop.page';
import { ComponentsModule } from 'src/app/components/web/components.module';
import { PublicacionesModule } from 'src/app/components/publicaciones/publicaciones.module';
import { DynamicComponentDirective } from 'src/app/directives/dynamic-components.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrowshopPageRoutingModule,
    ComponentsModule,
    PublicacionesModule
  ],
  declarations: [GrowshopPage, DynamicComponentDirective]
})
export class GrowshopPageModule {}

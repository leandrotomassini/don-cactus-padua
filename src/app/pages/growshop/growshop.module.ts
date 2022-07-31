import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrowshopPageRoutingModule } from './growshop-routing.module';

import { GrowshopPage } from './growshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrowshopPageRoutingModule
  ],
  declarations: [GrowshopPage]
})
export class GrowshopPageModule {}

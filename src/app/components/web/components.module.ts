import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { SlideComponent } from './slide/slide.component';
import { ProductoPage } from '../../pages/producto/producto.page';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { IonicModule } from '@ionic/angular';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    MenuPrincipalComponent,
    SlideComponent,
    ProductoPage,
    AvatarSelectorComponent,
    TablaProductosComponent
  ],
  exports: [
    MenuPrincipalComponent,
    SlideComponent,
    AvatarSelectorComponent,
    TablaProductosComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }

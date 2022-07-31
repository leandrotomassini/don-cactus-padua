import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { SlideComponent } from './slide/slide.component';
import { CategoriasComponent } from './categorias/categorias.component';



@NgModule({
  declarations: [
    MenuPrincipalComponent,
    SlideComponent,
    CategoriasComponent
  ],
  exports: [
    MenuPrincipalComponent,
    SlideComponent,
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})
export class ComponentsModule { }

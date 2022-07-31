import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { SlideComponent } from './slide/slide.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { MasvendidosComponent } from './masvendidos/masvendidos.component';
import { ProductoPage } from '../pages/producto/producto.page';



@NgModule({
  declarations: [
    MenuPrincipalComponent,
    SlideComponent,
    CategoriasComponent,
    MasvendidosComponent,
    ProductoPage
  ],
  exports: [
    MenuPrincipalComponent,
    SlideComponent,
    CategoriasComponent,
    MasvendidosComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
  ]
})
export class ComponentsModule { }

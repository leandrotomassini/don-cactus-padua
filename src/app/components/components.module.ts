import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SlidercategoriasComponent } from './slidercategorias/slidercategorias.component';
import { MasvendidosComponent } from './masvendidos/masvendidos.component';
import { DestacadoComponent } from './destacado/destacado.component';
import { GrupoCategoriasComponent } from './grupo-categorias/grupo-categorias.component';
import { OfertasDestacadasComponent } from './ofertas-destacadas/ofertas-destacadas.component';
import { OfertaDestacadaComponent } from './oferta-destacada/oferta-destacada.component';
import { VideoDestacadoComponent } from './video-destacado/video-destacado.component';



@NgModule({
  declarations: [
    MenuPrincipalComponent,
    SlideshowComponent,
    SlidercategoriasComponent,
    MasvendidosComponent,
    DestacadoComponent,
    GrupoCategoriasComponent,
    OfertasDestacadasComponent,
    OfertaDestacadaComponent,
    VideoDestacadoComponent
  ],
  exports: [
    MenuPrincipalComponent,
    SlideshowComponent,
    SlidercategoriasComponent,
    MasvendidosComponent,
    DestacadoComponent,
    GrupoCategoriasComponent,
    OfertasDestacadasComponent,
    OfertaDestacadaComponent,
    VideoDestacadoComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})
export class ComponentsModule { }

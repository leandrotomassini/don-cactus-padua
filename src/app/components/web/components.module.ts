import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { SlideComponent } from './slide/slide.component';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { IonicModule } from '@ionic/angular';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NuevoProductoPage } from 'src/app/pages/nuevo-producto/nuevo-producto.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { EditarProductoPage } from 'src/app/pages/editar-producto/editar-producto.page';
import { TablaCategoriasComponent } from './tabla-categorias/tabla-categorias.component';
import { EditarCategoriaPage } from 'src/app/pages/editar-categoria/editar-categoria.page';
import { NuevaCategoriaPage } from 'src/app/pages/nueva-categoria/nueva-categoria.page';
import { EditarEtiquetaPage } from 'src/app/pages/editar-etiqueta/editar-etiqueta.page';
import { NuevaEtiquetaPage } from 'src/app/pages/nueva-etiqueta/nueva-etiqueta.page';
import { TablaEtiquetasComponent } from './tabla-etiquetas/tabla-etiquetas.component';
import { BuscadorComponent } from './buscador/buscador.component';



@NgModule({
  declarations: [
    MenuPrincipalComponent,
    SlideComponent,
    AvatarSelectorComponent,
    TablaProductosComponent,
    NuevoProductoPage,
    EditarProductoPage,
    EditarCategoriaPage,
    NuevaCategoriaPage,
    EditarEtiquetaPage,
    NuevaEtiquetaPage,
    TablaCategoriasComponent,
    TablaEtiquetasComponent,
    BuscadorComponent
  ],
  exports: [
    MenuPrincipalComponent,
    SlideComponent,
    AvatarSelectorComponent,
    TablaProductosComponent,
    TablaCategoriasComponent,
    TablaEtiquetasComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    IonicModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaEtiquetaPage } from './nueva-etiqueta.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaEtiquetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaEtiquetaPageRoutingModule {}

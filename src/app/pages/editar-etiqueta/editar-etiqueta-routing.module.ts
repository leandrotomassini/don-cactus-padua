import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarEtiquetaPage } from './editar-etiqueta.page';

const routes: Routes = [
  {
    path: '',
    component: EditarEtiquetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarEtiquetaPageRoutingModule {}

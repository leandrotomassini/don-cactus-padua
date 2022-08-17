import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaCategoriaPage } from './nueva-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaCategoriaPageRoutingModule {}

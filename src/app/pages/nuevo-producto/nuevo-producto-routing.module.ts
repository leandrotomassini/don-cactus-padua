import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoProductoPage } from './nuevo-producto.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoProductoPageRoutingModule {}

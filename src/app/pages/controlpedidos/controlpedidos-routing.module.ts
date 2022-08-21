import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlpedidosPage } from './controlpedidos.page';

const routes: Routes = [
  {
    path: '',
    component: ControlpedidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlpedidosPageRoutingModule {}

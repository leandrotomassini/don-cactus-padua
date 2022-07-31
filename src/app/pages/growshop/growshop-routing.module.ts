import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrowshopPage } from './growshop.page';

const routes: Routes = [
  {
    path: '',
    component: GrowshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrowshopPageRoutingModule {}

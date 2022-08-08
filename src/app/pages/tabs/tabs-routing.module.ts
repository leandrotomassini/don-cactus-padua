import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from 'src/app/guards/usuario.guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'growshop',
        loadChildren: () => import('../growshop/growshop.module').then(m => m.GrowshopPageModule)
      },
      {
        path: 'cuenta',
        loadChildren: () => import('../cuenta/cuenta.module').then(m => m.CuentaPageModule),
        canLoad: [UsuarioGuard]
      },
      {
        path: 'carrito',
        loadChildren: () => import('../carrito/carrito.module').then(m => m.CarritoPageModule)
      },
      {
        path: 'categorias',
        loadChildren: () => import('../categorias/categorias.module').then(m => m.CategoriasPageModule)
      }, // TODO: Proteger ruta panel-control con un Guard
      {
        path: 'panel-control',
        loadChildren: () => import('../panel-control/panel-control.module').then( m => m.PanelControlPageModule)
      },
      {
        path: '',
        redirectTo: 'growshop',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'growshop',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }

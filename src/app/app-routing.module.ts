import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: ':tituloProductoUrl',
    loadChildren: () => import('./pages/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then(m => m.CuentaPageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then(m => m.CarritoPageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: 'categorias',
    loadChildren: () => import('./pages/categorias/categorias.module').then(m => m.CategoriasPageModule),
    canLoad: [UsuarioGuard]
  }, // TODO: Proteger ruta panel-control con un Guard
  {
    path: 'panel-control',
    loadChildren: () => import('./pages/panel-control/panel-control.module').then( m => m.PanelControlPageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: 'mp/controlpedidos/:id',
    loadChildren: () => import('./pages/controlpedidos/controlpedidos.module').then( m => m.ControlpedidosPageModule)
  },
  {
    path: '**',
    redirectTo: '/'
  },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

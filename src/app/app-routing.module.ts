import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: '**',
    redirectTo: ''
  },  {
    path: 'nueva-etiqueta',
    loadChildren: () => import('./pages/nueva-etiqueta/nueva-etiqueta.module').then( m => m.NuevaEtiquetaPageModule)
  },
  {
    path: 'editar-etiqueta',
    loadChildren: () => import('./pages/editar-etiqueta/editar-etiqueta.module').then( m => m.EditarEtiquetaPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

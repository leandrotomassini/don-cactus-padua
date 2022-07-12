import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';



@NgModule({
  declarations: [
    MenuPrincipalComponent
  ],
  exports: [
    MenuPrincipalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }

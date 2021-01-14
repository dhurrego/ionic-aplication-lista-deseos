import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '../pipes/pipes.module';

import { ListasComponent } from './listas/listas.component';

@NgModule({
  declarations: [
  	ListasComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [ListasComponent]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPageRoutingModule } from './agregar-routing.module';

import { PipesModule } from '../../pipes/pipes.module';
import { AgregarPage } from './agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPageRoutingModule,
    PipesModule
  ],
  declarations: [AgregarPage]
})
export class AgregarPageModule {}

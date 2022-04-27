import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navegacao11PageRoutingModule } from './navegacao11-routing.module';

import { Navegacao11Page } from './navegacao11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navegacao11PageRoutingModule
  ],
  declarations: [Navegacao11Page]
})
export class Navegacao11PageModule {}

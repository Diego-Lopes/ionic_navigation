import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navegacao10PageRoutingModule } from './navegacao10-routing.module';

import { Navegacao10Page } from './navegacao10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navegacao10PageRoutingModule
  ],
  declarations: [Navegacao10Page]
})
export class Navegacao10PageModule {}

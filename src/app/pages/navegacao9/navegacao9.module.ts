import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navegacao9PageRoutingModule } from './navegacao9-routing.module';

import { Navegacao9Page } from './navegacao9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navegacao9PageRoutingModule
  ],
  declarations: [Navegacao9Page]
})
export class Navegacao9PageModule {}

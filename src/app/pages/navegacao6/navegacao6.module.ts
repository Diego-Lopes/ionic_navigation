import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navegacao6PageRoutingModule } from './navegacao6-routing.module';

import { Navegacao6Page } from './navegacao6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navegacao6PageRoutingModule
  ],
  declarations: [Navegacao6Page]
})
export class Navegacao6PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navegacao12PageRoutingModule } from './navegacao12-routing.module';

import { Navegacao12Page } from './navegacao12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navegacao12PageRoutingModule
  ],
  declarations: [Navegacao12Page]
})
export class Navegacao12PageModule {}

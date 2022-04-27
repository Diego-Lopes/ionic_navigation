import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navegacao8PageRoutingModule } from './navegacao8-routing.module';

import { Navegacao8Page } from './navegacao8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navegacao8PageRoutingModule
  ],
  declarations: [Navegacao8Page]
})
export class Navegacao8PageModule {}

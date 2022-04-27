import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navegacao13PageRoutingModule } from './navegacao13-routing.module';

import { Navegacao13Page } from './navegacao13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navegacao13PageRoutingModule
  ],
  declarations: [Navegacao13Page]
})
export class Navegacao13PageModule {}

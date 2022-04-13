import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navegacao15PageRoutingModule } from './navegacao15-routing.module';

import { Navegacao15Page } from './navegacao15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navegacao15PageRoutingModule
  ],
  declarations: [Navegacao15Page]
})
export class Navegacao15PageModule {}

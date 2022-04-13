import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navegacao7PageRoutingModule } from './navegacao7-routing.module';

import { Navegacao7Page } from './navegacao7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navegacao7PageRoutingModule
  ],
  declarations: [Navegacao7Page]
})
export class Navegacao7PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navegacao3PageRoutingModule } from './navegacao3-routing.module';

import { Navegacao3Page } from './navegacao3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navegacao3PageRoutingModule
  ],
  declarations: [Navegacao3Page]
})
export class Navegacao3PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navegacao4PageRoutingModule } from './navegacao4-routing.module';

import { Navegacao4Page } from './navegacao4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navegacao4PageRoutingModule
  ],
  declarations: [Navegacao4Page]
})
export class Navegacao4PageModule {}

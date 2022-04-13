import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navegacao5PageRoutingModule } from './navegacao5-routing.module';

import { Navegacao5Page } from './navegacao5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navegacao5PageRoutingModule
  ],
  declarations: [Navegacao5Page]
})
export class Navegacao5PageModule {}

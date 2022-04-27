import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navegacao14PageRoutingModule } from './navegacao14-routing.module';

import { Navegacao14Page } from './navegacao14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navegacao14PageRoutingModule
  ],
  declarations: [Navegacao14Page]
})
export class Navegacao14PageModule {}

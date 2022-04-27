import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navegacao4Page } from './navegacao4.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navegacao4PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navegacao11Page } from './navegacao11.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navegacao11PageRoutingModule {}

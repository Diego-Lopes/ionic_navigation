import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navegacao10Page } from './navegacao10.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navegacao10PageRoutingModule {}

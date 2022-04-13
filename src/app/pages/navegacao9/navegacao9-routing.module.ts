import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navegacao9Page } from './navegacao9.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navegacao9PageRoutingModule {}

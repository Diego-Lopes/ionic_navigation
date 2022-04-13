import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navegacao13Page } from './navegacao13.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navegacao13PageRoutingModule {}

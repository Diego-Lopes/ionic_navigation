import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navegacao8Page } from './navegacao8.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navegacao8PageRoutingModule {}

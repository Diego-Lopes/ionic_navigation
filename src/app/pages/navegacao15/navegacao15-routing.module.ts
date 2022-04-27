import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navegacao15Page } from './navegacao15.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navegacao15PageRoutingModule {}

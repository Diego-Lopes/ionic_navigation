import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navegacao5Page } from './navegacao5.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navegacao5PageRoutingModule {}

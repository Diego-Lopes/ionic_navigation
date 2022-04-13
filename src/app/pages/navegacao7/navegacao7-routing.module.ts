import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navegacao7Page } from './navegacao7.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navegacao7PageRoutingModule {}

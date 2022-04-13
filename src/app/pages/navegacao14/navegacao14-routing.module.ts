import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navegacao14Page } from './navegacao14.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navegacao14PageRoutingModule {}

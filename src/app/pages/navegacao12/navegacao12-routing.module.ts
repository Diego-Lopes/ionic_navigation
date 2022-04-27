import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navegacao12Page } from './navegacao12.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navegacao12PageRoutingModule {}

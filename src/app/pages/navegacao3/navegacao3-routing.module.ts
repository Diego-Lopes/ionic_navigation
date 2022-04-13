import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navegacao3Page } from './navegacao3.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navegacao3PageRoutingModule {}

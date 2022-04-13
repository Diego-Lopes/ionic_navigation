import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navegacao6Page } from './navegacao6.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navegacao6PageRoutingModule {}

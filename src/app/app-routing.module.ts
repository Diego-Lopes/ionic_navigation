import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'navegacao',
    loadChildren: () =>
      import('./pages/navegacao/navegacao.module').then(
        (m) => m.NavegacaoPageModule
      ),
  },
  {
    path: 'navegacao2',
    loadChildren: () =>
      import('./pages/navegacao2/navegacao2.module').then(
        (m) => m.Navegacao2PageModule
      ),
  },
  {
    path: 'navegacao3',
    loadChildren: () =>
      import('./pages/navegacao3/navegacao3.module').then(
        (m) => m.Navegacao3PageModule
      ),
  },
  {
    path: 'navegacao4',
    loadChildren: () =>
      import('./pages/navegacao4/navegacao4.module').then(
        (m) => m.Navegacao4PageModule
      ),
  },
  {
    path: 'navegacao5',
    loadChildren: () =>
      import('./pages/navegacao5/navegacao5.module').then(
        (m) => m.Navegacao5PageModule
      ),
  },
  {
    path: 'navegacao6',
    loadChildren: () =>
      import('./pages/navegacao6/navegacao6.module').then(
        (m) => m.Navegacao6PageModule
      ),
  },
  {
    path: 'navegacao7',
    loadChildren: () =>
      import('./pages/navegacao7/navegacao7.module').then(
        (m) => m.Navegacao7PageModule
      ),
  },
  {
    path: 'navegacao8',
    loadChildren: () =>
      import('./pages/navegacao8/navegacao8.module').then(
        (m) => m.Navegacao8PageModule
      ),
  },
  {
    path: 'navegacao9',
    loadChildren: () =>
      import('./pages/navegacao9/navegacao9.module').then(
        (m) => m.Navegacao9PageModule
      ),
  },
  {
    path: 'navegacao10',
    loadChildren: () =>
      import('./pages/navegacao10/navegacao10.module').then(
        (m) => m.Navegacao10PageModule
      ),
  },
  {
    path: 'navegacao11',
    loadChildren: () =>
      import('./pages/navegacao11/navegacao11.module').then(
        (m) => m.Navegacao11PageModule
      ),
  },

  {
    path: 'navegacao13',
    loadChildren: () =>
      import('./pages/navegacao13/navegacao13.module').then(
        (m) => m.Navegacao13PageModule
      ),
  },
  {
    path: 'navegacao14',
    loadChildren: () =>
      import('./pages/navegacao14/navegacao14.module').then(
        (m) => m.Navegacao14PageModule
      ),
  },
  {
    path: 'navegacao15',
    loadChildren: () =>
      import('./pages/navegacao15/navegacao15.module').then(
        (m) => m.Navegacao15PageModule
      ),
  },

  {
    path: 'navegacao12',
    loadChildren: () =>
      import('./pages/navegacao12/navegacao12.module').then(
        (m) => m.Navegacao12PageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

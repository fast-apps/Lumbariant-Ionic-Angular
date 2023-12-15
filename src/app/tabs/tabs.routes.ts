import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

// tabs
// tabs/home
// tabs/create
// tabs/profile

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../home/home.routes').then((m) => m.routes),
      },
      {
        path: 'create',
        loadComponent: () =>
          import('../create/create.page').then((m) => m.CreatePage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.profilePage),
      }
    ],
  },
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full',
  },
];

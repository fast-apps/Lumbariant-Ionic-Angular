import { Routes } from '@angular/router';
import { HomePage } from '../home/home.page';


export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadComponent: () => 
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'excercises',
        loadComponent: () =>
          import('../exercises/exercises.page').then((m) => m.ExercisesPage),
      },
      {
        path: '',
        redirectTo: 'workouts',
        pathMatch: 'full',
      },
    ],
  }
];

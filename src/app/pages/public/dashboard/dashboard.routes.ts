import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard.component').then((c) => c.DashboardComponent),
    children: [
      {
        path: 'monitory',
        loadComponent: () =>
          import('../components/monitory-modal/monitory-modal.component').then(
            (c) => c.MonitoryModalComponent
          ),
      },
      {
        path: 'notifications-history',
        loadComponent: () =>
          import(
            '../components/notifications-history-modal/notifications-history-modal.component'
          ).then((c) => c.NotificationsHistoryModalComponent),
      },
      {
        path: 'zones',
        loadComponent: () =>
          import('../components/zones-modal/zones-modal.component').then(
            (c) => c.ZonesModalComponent
          ),
      },
      {
        path: 'people',
        loadComponent: () =>
          import('../components/people-modal/people-modal.component').then(
            (c) => c.PeopleModalComponent
          ),
      },
    ],
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

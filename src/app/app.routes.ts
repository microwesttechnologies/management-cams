import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/public/dashboard/dashboard.routes').then(
        (r) => r.DASHBOARD_ROUTES
      ),
  },
];

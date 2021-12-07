import { lazy } from 'react';

const routes = [
  {
    path: 'home',
    component: lazy(() => import('../pages/Home')),
    exact: true
  },
  {
    path: 'cart',
    component: lazy(() => import('../pages/Cart')),
    exact: true
  },
  {
    path: 'tickets',
    component: lazy(() => import('../pages/Tickets')),
    exact: true
  }
];

export default routes;
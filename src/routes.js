import { lazy } from 'react';

export default [
  {
    path: '/app/dashboard',
    component: lazy(() => import('./components/Pages/Post/Post')),
    exact: true,
  },
]

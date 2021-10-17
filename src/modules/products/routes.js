import React from 'react'

const ROUTE_URL = '/products'

const routes = [
  {
    path: ROUTE_URL,
    component: React.lazy(() => import('./pages/list')),
    exact: true
  }
]

export const indexRoute = () => ROUTE_URL

export default routes

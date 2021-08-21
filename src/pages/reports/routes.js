import React from 'react'

const ROUTE_URL = '/reports'

const routes = [
  {
    path: ROUTE_URL,
    component: React.lazy(() => import('pages/reports')),
    exact: true
  }
]

export const indexRoute = () => ROUTE_URL

export default routes

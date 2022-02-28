import { loginRoute } from 'modules/auth/routes'
import { indexRoute as categoryIndexRoute } from 'modules/categories/routes'
import { indexRoute as counterIndexRoute } from 'modules/counter/routes'
import { indexRoute as dashboardIndexRoute } from 'modules/dashboard/routes'
import { indexRoute as examplesIndexRoute } from 'modules/examples/routes'
import { indexRoute as productsIndexRoute } from 'modules/products/routes'
import Roles from 'services/auth/Roles'

const navigationConfig = [
  {
    id: 'dashboard',
    icon: 'dashboard',
    text: 'Dashboard',
    url: dashboardIndexRoute(),
    role: null
  },
  {
    id: 'categories',
    icon: 'turned_in',
    text: 'Categories',
    url: categoryIndexRoute(),
    role: Roles.DEFAULT
  },
  {
    id: 'products',
    icon: 'photo_library',
    text: 'Products',
    url: productsIndexRoute(),
    role: [Roles.DEFAULT]
  },
  {
    id: 'integrations',
    icon: 'layers',
    text: 'Examples & Tests',
    url: examplesIndexRoute(),
    auth: true
  },
  {
    id: 'counter',
    icon: 'hourglass_empty',
    text: 'Counter App',
    url: counterIndexRoute(),
    auth: false
  },
  {
    id: 'login',
    icon: 'login',
    text: 'Login',
    url: loginRoute(),
    auth: false
  }
]

export default navigationConfig

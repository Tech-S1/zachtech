import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

const routes = [
  {
    path: '/',
    element: <Home />,
    loader: () => ({ title: 'Home' }),
  },
  {
    path: '/profile',
    element: <Profile />,
    loader: () => ({
      title: 'Profile',
    }),
  },
]

const router = createBrowserRouter(routes)

export { router, routes }

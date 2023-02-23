import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import CommandViewOnly from '../pages/CommandViewOnly'
import { profile, projects } from '../commands/commands'

const routes = [
  {
    path: '/',
    element: <Home />,
    loader: () => ({ title: 'Home' }),
  },
  {
    path: '/profile',
    element: <CommandViewOnly command={profile} />,
    loader: () => ({
      title: 'Profile',
    }),
  },
  {
    path: '/projects',
    element: <CommandViewOnly command={projects} />,
    loader: () => ({
      title: 'Projects',
    }),
  },
]

const router = createBrowserRouter(routes)

export { router, routes }

import { Outlet, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/Main.layout'
import HomePage from './pages/Home.page'
import DiscoverPage from './pages/Discover.page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'discover',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <DiscoverPage />
          }
        ]
      }
    ]
  }
])

export default router

import { Outlet, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/Main.layout'
import HomePage from './pages/Home.page'
import DiscoverPage from './pages/Discover.page'
import DetailPage, { loader as detailLoader } from './pages/Detail.page'
// import DetailPage from './pages/Detail.page'

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
          },
          {
            path: 'song/:id',
            element: <DetailPage />,
            loader: detailLoader
          }
        ]
      }
    ]
  }
])

export default router

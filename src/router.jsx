import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/Main.layout'
import HomePage from './pages/Home.page'
import DiscoverPage from './pages/Discover.page'
import SearchResult from './components/Discover/SearchResult'

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
        path: '/discover',
        element: <DiscoverPage />,
        children: [
          {
            index: true,
            element: <SearchResult />
          }
        ]
      }
    ]
  }
])

export default router

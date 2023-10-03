import { createTheme, MantineProvider } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import '@mantine/core/styles.css';
import './assets/index.css'

export default function App() {
  const theme = createTheme({
    primaryColor: 'neon-green',
    colors: {
      'neon-green': [
        "#edffe3",
        "#ddffcc",
        "#bdff9a",
        "#9aff63",
        "#7cff36",
        "#69ff18",
        "#5dff02",
        "#4ce300",
        "#40ca00",
        "#2fae00"
      ]
    }
  })

  return (
    <MantineProvider
      defaultColorScheme='dark'
      theme={theme}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// configuration from  router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home.tsx'
import Movies from './routes/Movies.tsx'
import Serie from './routes/Serie.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/movies",
        element: <Movies />
      },
      {
        path: "/serie",
        element: <Serie />
      }
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

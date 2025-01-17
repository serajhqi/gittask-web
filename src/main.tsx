import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'rsuite/dist/rsuite-no-reset.min.css';
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home.page.tsx';
import NotFound from './pages/not-found.page.tsx';
import Settings from './pages/settings.page.tsx';
import About from './pages/about.page.tsx';
import Help from './pages/help.page.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/help',
        element: <Help />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'rsuite/dist/rsuite-no-reset.min.css';
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/about.page.tsx';
import Home from './pages/home.page.tsx';
import NotFound from './pages/not-found.page.tsx';

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
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

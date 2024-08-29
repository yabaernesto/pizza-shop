import { Helmet, HelmetProvider } from 'react-helmet-async';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import './global.css';

export function App() {

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

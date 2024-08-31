import { Helmet, HelmetProvider } from 'react-helmet-async';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import { ThemeProvider } from './components/theme/theme-provider';
import './global.css';

export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
};

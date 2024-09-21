// Importing Modules/Packages
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { registerServiceWorker } from './helpers/helpers.js';
import StorePageComponent from './pages/StorePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import { createRoot } from 'react-dom/client';
import HomePage from './pages/HomePage.jsx';
import App from './App.jsx';

// Stylesheet
import './assets/output/main.min.css';

// Creating React Routes
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <HomePage />
    },
    {
      path: '/Store',
      element: <StorePageComponent />
    },
    {
      path: '/Store/:id',
      element: <ProductsPage />
    },
  ]
}]);

registerServiceWorker();

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import {
  loader as catalogueLoader
} from './root/catalogue';

import {
  loader as queryLoader
} from './root/root';

import { loader } from './root/product';


import Root from './root/root';
import Catalogue from './root/catalogue';
import Product from './root/product';
import About from './root/about';
import ErrorPage from './root/error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: queryLoader,
    errorElement: <ErrorPage />,
    children: [{
      children: [
        {
          index: true,
          loader: catalogueLoader,
          element: <Catalogue />,
          errorElement: <ErrorPage />
        },
        {
          path: "product/:productId",
          loader: loader,
          element: <Product />,
          errorElement: <ErrorPage />
        },
        {
          path: "/about",
          element: <About />,
          errorElement: <ErrorPage />
        }
      ]
    }]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


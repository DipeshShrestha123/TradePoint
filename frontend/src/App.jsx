import './App.css'
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from './components/layout/Layout';
import HomePage from './components/landing_page/home/HomePage'
import AboutPage from "../src/components/landing_page/about/AboutPage"
import ProductPage from "../src/components/landing_page/products/ProductsPage"
import PricingPage from "../src/components/landing_page/pricing/PricingPage"
import SupportPage from "../src/components/landing_page/support/SupportPage"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/product",
          element: <ProductPage />
        },
        {
          path: "/pricing",
          element: <PricingPage />,
        },
        {
          path: "/support",
          element: <SupportPage />,
        }
      ],
    },
  ]);
  
  return (
    <RouterProvider router={router}/>
  );
}
export default App

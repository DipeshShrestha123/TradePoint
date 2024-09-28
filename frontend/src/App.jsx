import './App.css'
import React from "react";
// import ReactDOM from "react-dom/client";
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


// import Signup from "./landing_page/signup/Signup";
// import AboutPage from "./landing_page/about/AboutPage";
// import ProductPage from "./landing_page/products/ProductsPage";
// import PricingPage from "./landing_page/pricing/PricingPage";
// import SupportPage from "./landing_page/support/SupportPage";
// import NotFound from "./landing_page/NotFound";
// import Layout from "./landing_page/layout";

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

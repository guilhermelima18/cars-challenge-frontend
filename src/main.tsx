import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import RegisterCar from "./pages/RegisterCar.tsx";
import DetailsCar from "./pages/DetailsCar.tsx";
import { Layout } from "./components/Layout/index.tsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "register-car",
    element: (
      <Layout>
        <RegisterCar />
      </Layout>
    ),
  },
  {
    path: "details-car/:id",
    element: (
      <Layout>
        <DetailsCar />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

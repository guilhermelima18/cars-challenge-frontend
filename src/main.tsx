import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import { Layout } from "./components/Layout/index.tsx";
import RegisterCar from "./pages/RegisterCar.tsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

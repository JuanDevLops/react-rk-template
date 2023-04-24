import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import ViewPrimary from "../pages/Primary/Index";
import ViewCounterRedux from "../pages/CounterRedux/Index";
import AsyncComponent from "../components/Async/AsyncComponent";
import React from "react";
import App from "../app/App";
import MainLayout from "../layouts/MainLayout";

const lazy = () => import(/* webpackChunkName: "lazy" */ '../pages/Lazy/Index');
  

  const router  = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "ViewPrimary/:Id",
          element: <ViewPrimary />,
        },
        {
          path: "ViewCounterRedux",
          element: <ViewCounterRedux />,
        },
        {
            path: "Lazy/:Id",
            element: <AsyncComponent moduleProvider={lazy} />,
          },
          {
            path: "/",
            element: <MainLayout/>,
          },
      ],
    },
  ]);

  export default router;
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./Index.scss";
import Root from "./routes/Root";
import ErrorPage from "./error-page";

import AsyncComponent from "./components/AsyncComponent";
import ViewPrimary from "./routes/ViewPrimary";
const lazy = () => import(/* webpackChunkName: "lazy" */ './routes/ViewLazy');


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "ViewPrimary/:Id",
          element: <ViewPrimary />,
        },
        {
            path: "Lazy/:Id",
            element: <AsyncComponent moduleProvider={lazy} />,
          },
      ],
    },
  ]);

const component : any = document.getElementById("root")
ReactDOM.createRoot(component).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./Index.scss";
import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";

import AsyncComponent from "./components/AsyncComponent";
import ViewPrimary from "./routes/ViewPrimary";
import ViewCounterRedux from "./routes/ViewCounterRedux";
import {  Provider } from "react-redux";
import store from "./redux/store";


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
          path: "ViewCounterRedux",
          element: <ViewCounterRedux />,
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
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);
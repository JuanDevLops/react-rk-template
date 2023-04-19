import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./Index.scss";
import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";

import AsyncComponent from "./components/Async/AsyncComponent";
import ViewPrimary from "./pages/Primary/Index";
import ViewCounterRedux from "./pages/CounterRedux/Index";
import {  Provider } from "react-redux";
import store from "./redux/Store";
import router from "./routes/Routes";





const component : any = document.getElementById("root")
ReactDOM.createRoot(component).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);
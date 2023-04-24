import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./Index.scss";
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
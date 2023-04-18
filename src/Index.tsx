import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./Index.scss";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
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
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Grid from "./components/grid/Grid";
import Modal from "./components/modal/Modal";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/grid",
    element: <Grid></Grid>,
  },
  {
    path: "/modal",
    element: <Modal><h1>teste</h1></Modal>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

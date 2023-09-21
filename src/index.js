import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstPag from "./components/FirstPag";
import ListOrdPoke from "./components/ListOrdPoke";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPag />,
  },
  {
    path: "region/*",
    element: <ListOrdPoke />,
  },
  {
    path: "type/*",
    element: <ListOrdPoke />,
  },
  {
    path: "all",
    element: <ListOrdPoke />,
  },
  {
    path: "favorite",
    element: <p>em construção</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

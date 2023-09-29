import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstPag from "./components/FirstPag";
import "./reset.css";
import PagOrdPoke from "./components/PagOrdPoke";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPag />,
  },
  {
    path: "region/*",
    element: <PagOrdPoke />,
  },
  {
    path: "type/*",
    element: <PagOrdPoke />,
  },
  {
    path: "all",
    element: <PagOrdPoke />,
  },
  {
    path: "favorite",
    element: <p>em construção</p>,
  },
  { path: "*", element: <p>Pagina não encontrada</p> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

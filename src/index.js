import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagSortSelection from "components/Pags/PagSortSelection";
import PagListOrd from "components/Pags/PagListOrd";
import Header from "components/Header";
import { GlobalStyled, ResetStyled } from "components/GlobalStyled";
import { PagContextProvider } from "context/FindValues";

const paths = ["type/*", "region/*", "all"];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResetStyled />
      <GlobalStyled>
        <Header />
        <Routes>
          <Route path="/" element={<PagSortSelection />} />
          <Route path="favorite" element={<div>Em construção</div>} />
          {paths.map((path) => (
            <Route
              key={path}
              path={path}
              element={
                <PagContextProvider>
                  <PagListOrd />
                </PagContextProvider>
              }
            />
          ))}
          <Route path="*" element={<div>Pagina não encontrada</div>} />
        </Routes>
      </GlobalStyled>
    </BrowserRouter>
  </React.StrictMode>
);

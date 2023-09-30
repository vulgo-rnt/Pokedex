import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagSelection from "components/Pags/PagSortSelection";
import PagListOrd from "components/Pags/PagListOrd";
import Header from "components/Header";
import { GlobalStyled, ResetStyled } from "components/GlobalStyled";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResetStyled />
      <GlobalStyled>
        <Header />
        <Routes>
          <Route path="/" element={<PagSelection />} />
          <Route path="region/*" element={<PagListOrd />} />
          <Route path="type/*" element={<PagListOrd />} />
          <Route path="all" element={<PagListOrd />} />
          <Route path="region/*" element={<div>Em construção</div>} />
          <Route path="*" element={<div>Pagina não encontrada</div>} />
        </Routes>
      </GlobalStyled>
    </BrowserRouter>
  </React.StrictMode>
);

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagSortSelection from "components/Pags/PagSortSelection";
import PagListOrd from "components/Pags/PagListOrd";
import Header from "components/Header";
import { GlobalStyled, ResetStyled } from "components/GlobalStyled";
import { PagContextProvider } from "context/PagContext";
import {
  PagFavoriteContext,
  PagFavoriteContextProvider,
} from "context/PagFavoriteContext";

const PagListOrdWithContext = () => (
  <PagContextProvider>
    <PagListOrd />
  </PagContextProvider>
);

function App() {
  return (
    <BrowserRouter>
      <ResetStyled />
      <GlobalStyled>
        <Header />
        <Routes>
          <Route path="/" element={<PagSortSelection />} />
          <Route
            path="favorite"
            element={
              <PagFavoriteContextProvider>
                <PagListOrd context={PagFavoriteContext} />
              </PagFavoriteContextProvider>
            }
          />
          <Route path="type/*" element={<PagListOrdWithContext />} />
          <Route path="region/*" element={<PagListOrdWithContext />} />
          <Route path="all" element={<PagListOrdWithContext />} />
          <Route path="*" element={<div>Pagina não encontrada</div>} />
        </Routes>
      </GlobalStyled>
    </BrowserRouter>
  );
}
export default App;

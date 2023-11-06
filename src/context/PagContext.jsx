import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PagContext = createContext();
PagContext.displayName = "PagContext";

export function PagContextProvider({ children }) {
  const [list, setList] = useState([]);

  const [lengthList, setLengthList] = useState(0);

  const [pag, setPag] = useState(1);

  const [dialogCard, setDialogCard] = useState(null);

  const location = new String(window.location.pathname);

  useEffect(() => {
    fetch(`https://pokedex-backend-vulgo-rnt.vercel.app${location}/${pag}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setList(resp.response);
        setLengthList(resp.lengthList);
      });
  }, [pag]);

  return (
    <PagContext.Provider
      value={{
        list,
        lengthList,
        setPag,
        dialogCard,
        setDialogCard,
      }}
    >
      {children}
    </PagContext.Provider>
  );
}

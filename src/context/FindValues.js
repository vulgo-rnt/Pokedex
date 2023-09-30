import { createContext, useState } from "react";

export const PagContext = createContext();
PagContext.displayName = "PagContext";

export function PagContextProvider({ children }) {
  const [list, setList] = useState([]);

  const [lengthList, setLengthList] = useState(0);

  const [pag, setPag] = useState(1);

  const [infoPokeCard, setInfoPokeCard] = useState(null);

  return (
    <PagContext.Provider
      value={{
        list,
        setList,
        lengthList,
        setLengthList,
        pag,
        setPag,
        infoPokeCard,
        setInfoPokeCard,
      }}
    >
      {children}
    </PagContext.Provider>
  );
}

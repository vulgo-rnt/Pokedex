import { createContext, useContext, useEffect, useState } from "react";

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
export function usePagContext() {
  const {
    list,
    setList,
    lengthList,
    setLengthList,
    pag,
    setPag,
    infoPokeCard,
    setInfoPokeCard,
  } = useContext(PagContext);

  const location = new String(window.location.pathname);

  useEffect(() => {
    fetch(`http://192.168.0.95:4111${location}/${pag}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setList(resp.response);
        setLengthList(resp.lengthList);
      });
  }, [pag]);

  return {
    list,
    lengthList,
    setPag,
    infoPokeCard,
    setInfoPokeCard,
  };
}

import { createContext, useEffect, useState } from "react";

export const PagFavoriteContext = createContext();
PagFavoriteContext.displayName = "PagFavoriteContext";

export function PagFavoriteContextProvider({ children }) {
  const [list, setList] = useState([]);

  const [lengthList, setLengthList] = useState(0);

  const [pag, setPag] = useState(1);

  const [dialogCard, setDialogCard] = useState(null);

  useEffect(() => {
    const values = Object.values(localStorage);
    const listTreat = values.map((value) => JSON.parse(value));
    setList(listTreat);
    setLengthList(localStorage.length);
  }, [dialogCard]);

  return (
    <PagFavoriteContext.Provider
      value={{
        list,
        lengthList,
        setPag,
        dialogCard,
        setDialogCard,
      }}
    >
      {children}
    </PagFavoriteContext.Provider>
  );
}

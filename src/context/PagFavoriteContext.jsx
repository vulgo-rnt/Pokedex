import { createContext, useEffect, useState } from "react";

export const PagFavoriteContext = createContext();
PagFavoriteContext.displayName = "PagFavoriteContext";

export function PagFavoriteContextProvider({ children }) {
  const [list, setList] = useState([]);

  const [lengthList, setLengthList] = useState(0);

  const [pag, setPag] = useState(1);

  const [dialogCard, setDialogCard] = useState(null);

  function limit(arr) {
    return arr.filter((value, index) => index < 27);
  }

  useEffect(() => {
    const values = Object.values(localStorage);
    const listJson = values.map((value) => JSON.parse(value));

    const listSkipLimit =
      pag === 1 ? limit(listJson) : limit(listJson.splice((pag - 1) * 27));

    setList(listSkipLimit);
    setLengthList(localStorage.length);
  }, [dialogCard, pag]);

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

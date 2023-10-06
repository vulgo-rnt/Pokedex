import { useState } from "react";

export default function HeartFavorite({ poke }) {
  const initialIcon = localStorage.getItem(poke.name)
    ? "/iconsHearts/heartBlack.png"
    : "/iconsHearts/heartWhite.png";

  const [icon, setIcon] = useState(initialIcon);

  function setFavorite(poke) {
    if (localStorage.getItem(poke.name)) {
      localStorage.removeItem(poke.name);
      setIcon("/iconsHearts/heartWhite.png");
    } else {
      localStorage.setItem(poke.name, JSON.stringify(poke));
      setIcon("/iconsHearts/heartBlack.png");
    }
  }

  return <img src={icon} onClick={() => setFavorite(poke)} />;
}

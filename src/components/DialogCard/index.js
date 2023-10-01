import { useState } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const DialogContanier = styled.dialog`
  position: fixed;
  width: 60vw;
  top: 5%;
  background-color: white;
`;

function DialogCard({ poke, set }) {
  const initialIcon = localStorage.getItem(poke.name)
    ? "/iconsHearts/heartBlack.png"
    : "/iconsHearts/heartWhite.png";

  let [icon, setIcon] = useState(initialIcon);

  function setFavorite(poke) {
    if (localStorage.getItem(poke.name)) {
      localStorage.removeItem(poke.name);
      setIcon("/iconsHearts/heartWhite.png");
    } else {
      localStorage.setItem(poke.name, JSON.stringify(poke));
      setIcon("/iconsHearts/heartBlack.png");
    }
  }
  return (
    <>
      <Overlay />
      <DialogContanier open={!!poke}>
        <button onClick={() => set(null)}>X</button>
        <img src={icon} onClick={() => setFavorite(poke)} />
        <p>{poke.name}</p>
        <p>{poke.id}</p>
        <img src={poke.img[0]} />
      </DialogContanier>
    </>
  );
}
export default DialogCard;

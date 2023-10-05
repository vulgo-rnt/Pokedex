import BaseStats from "./BaseStats";
import { useState } from "react";
import styled from "styled-components";
import Evolutions from "./Evolutions";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const DialogContanier = styled.dialog`
  font-family: "Pokemon Classic Regular";
  position: fixed;
  width: 60vw;
  top: 5%;
  background-color: white;

  text-align: center;
  display: grid;

  .pokeImg {
    width: 100px;
  }
  button {
    position: absolute;
    top: -10px;
    right: -10px;
  }
`;

function DialogCard({ poke, set }) {
  const initialIcon = localStorage.getItem(poke.name)
    ? "/iconsHearts/heartBlack.png"
    : "/iconsHearts/heartWhite.png";

  const [icon, setIcon] = useState(initialIcon);
  const [select, setSelect] = useState([true, false]);

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
        <img className="pokeImg" src={poke.img[0]} />
        <img src={icon} onClick={() => setFavorite(poke)} />
        <p>{poke.name}</p>
        <p>{poke.id}</p>
        <section>
          <BaseStats stats={poke.stats} hidden={select[0]} />
          <Evolutions evolutions={poke.evolutions} hidden={select[1]} />
        </section>
      </DialogContanier>
    </>
  );
}
export default DialogCard;

import BaseStats from "./BaseStats";
import { useState } from "react";
import styled from "styled-components";
import Evolutions from "./Evolutions";
import HeartFavorite from "components/HeartFavorite";

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
  section {
    background-color: red;
    border-radius: 0 0 10px 10px;
    padding: 16px;
  }
`;

const ClosedContanier = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
`;

const NavContanier = styled.nav`
  display: flex;
  gap: 8px;
  font-size: small;
  justify-content: space-between;
`;
const ButtonNavContanier = styled.button`
  border: none;
  font-family: "Pokemon Classic Regular";
  padding: 0 4.5px 1px 4.5px;
  border-radius: 10px 10px 0 0;
  background-color: ${(props) => (props.btnSelect ? "transparent" : "red")};
`;

function DialogCard({ poke, set }) {
  const [select, setSelect] = useState([true, false]);

  return (
    <>
      <Overlay />
      <DialogContanier open={!!poke}>
        <ClosedContanier onClick={() => set(null)}>X</ClosedContanier>
        <img className="pokeImg" src={poke.img[0]} />
        <HeartFavorite poke={poke} />
        <p>{poke.name}</p>
        <p>{poke.id}</p>
        <NavContanier>
          <ButtonNavContanier
            btnSelect={select[0]}
            onClick={() => setSelect([false, true])}
          >
            Stats
          </ButtonNavContanier>
          <ButtonNavContanier
            btnSelect={select[1]}
            onClick={() => setSelect([true, false])}
          >
            Evolutions
          </ButtonNavContanier>
        </NavContanier>
        <section>
          <BaseStats stats={poke.stats} hidden={select[0]} />
          <Evolutions evolutions={poke.evolutions} hidden={select[1]} />
        </section>
      </DialogContanier>
    </>
  );
}
export default DialogCard;

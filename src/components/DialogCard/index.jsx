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
    background-color: grey;
    border-radius: 0 0 10px 10px;
    padding: 16px;
  }
`;

const ClosedContanier = styled.button`
  position: absolute;
  color: white;
  background-color: #911515;
  top: -10px;
  right: -10px;
  padding: 3px 6px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const NavContanier = styled.nav`
  display: flex;
  font-size: small;
  justify-content: space-between;
`;
const ButtonNavContanier = styled.button`
  border: none;
  padding: 0 4.5px 1px 4.5px;
  border-radius: 10px 10px 0 0;
  background-color: ${(props) => (props?.$bg ? "transparent" : "grey")};
`;

function DialogCard({ poke, set }) {
  const [select, setSelect] = useState([1, 0]);

  return (
    <>
      <Overlay />
      <DialogContanier open={!!poke}>
        <p>{poke.name}</p>
        <ClosedContanier onClick={() => set(null)}>X</ClosedContanier>
        <HeartFavorite poke={poke} />

        <p>{poke.id}</p>
        <img className="pokeImg" src={poke.img[0]} />

        <NavContanier>
          <ButtonNavContanier $bg={select[0]} onClick={() => setSelect([0, 1])}>
            Stats
          </ButtonNavContanier>
          <ButtonNavContanier $bg={select[1]} onClick={() => setSelect([1, 0])}>
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

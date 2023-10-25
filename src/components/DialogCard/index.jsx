import BaseStats from "./BaseStats";
import { useState } from "react";
import styled from "styled-components";
import Evolutions from "./Evolutions";
import HeartFavorite from "components/HeartFavorite";
import { treatID, treatName } from "useful/traetString";
import { bgForTimes } from "useful/bgForTimes";
import AboutInfoPoke from "./AboutInfoPoke";
import PokeName from "components/PokeName";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const DialogContanier = styled.dialog`
  box-sizing: border-box;
  position: fixed;
  top: 5%;
  min-width: 60vw;
  max-height: 90vh;
  background-color: white;
  text-align: center;
  display: grid;
  border-radius: 16px;
  gap: 16px;
`;
const HeaderContanier = styled.div`
  position: relative;
  p {
    margin: 0;
  }
  img {
    position: absolute;
    left: 0;
  }
`;
const BlockImgContanier = styled.div`
  background: url(${() => bgForTimes()});
  background-size: 100%;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2vw;

  p {
    position: absolute;
    top: -6%;
    right: -3%;
    padding: 0 2% 1% 2%;
    margin: 0;
    background-color: white;
    border-radius: 8px;
    border: 1px solid black;
    box-shadow: 1px 1px 0 black;
  }
  img {
    margin: auto;
    max-width: 60%;
    max-height: 60%;
  }
`;
const MoreInfosContanier = styled.div`
  margin: auto;
  section {
    padding: 0 16px 16px 16px;
    background-color: grey;
    border-radius: 0 0 20px 20px;
  }
`;
const ClosedContanier = styled.button`
  position: absolute;
  color: white;
  background-color: #b93737;
  top: -10px;
  right: -10px;
  padding: 0 2px 3px 6px;
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
  const [select, setSelect] = useState([0, 1, 1]);

  return (
    <>
      <Overlay />
      <DialogContanier open={!!poke}>
        <ClosedContanier onClick={() => set(null)}>X</ClosedContanier>
        <HeaderContanier>
          <HeartFavorite poke={poke} />
          <PokeName>{treatName(poke.name)}</PokeName>
        </HeaderContanier>

        <BlockImgContanier>
          <p>#{treatID(poke.id)}</p>
          <img src={poke.img[0]} />
        </BlockImgContanier>
        <MoreInfosContanier>
          <NavContanier>
            <ButtonNavContanier
              $bg={select[0]}
              onClick={() => setSelect([0, 1, 1])}
            >
              About
            </ButtonNavContanier>
            <ButtonNavContanier
              $bg={select[1]}
              onClick={() => setSelect([1, 0, 1])}
            >
              Stats
            </ButtonNavContanier>
            <ButtonNavContanier
              $bg={select[2]}
              onClick={() => setSelect([1, 1, 0])}
            >
              Evolutions
            </ButtonNavContanier>
          </NavContanier>

          <section>
            <AboutInfoPoke info={poke} hidden={select[0]} />
            <BaseStats stats={poke.stats} hidden={select[1]} />
            <Evolutions evolutions={poke.evolutions} hidden={select[2]} />
          </section>
        </MoreInfosContanier>
      </DialogContanier>
    </>
  );
}
export default DialogCard;

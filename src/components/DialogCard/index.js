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

function setFavorite(poke) {
  if (localStorage.getItem(poke.name)) {
    localStorage.removeItem(poke.name);
  } else {
    localStorage.setItem(poke.name, JSON.stringify(poke));
  }
}

function DialogCard({ poke, set }) {
  return (
    <>
      <Overlay />
      <DialogContanier open={!!poke}>
        <button onClick={() => set(null)}>X</button>
        <button onClick={() => setFavorite(poke)}>FAVORITE</button>
        <p>{poke.name}</p>
        <p>{poke.id}</p>
        <img src={poke.img[0]} />
      </DialogContanier>
    </>
  );
}
export default DialogCard;

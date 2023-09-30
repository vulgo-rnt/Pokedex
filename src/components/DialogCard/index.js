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
  return (
    <>
      <Overlay />
      <DialogContanier open={!!poke}>
        <button onClick={() => set(null)}>X</button>
        <p>{poke.name}</p>
        <p>{poke.id}</p>
        <img src={poke.img[0]} />
      </DialogContanier>
    </>
  );
}
export default DialogCard;

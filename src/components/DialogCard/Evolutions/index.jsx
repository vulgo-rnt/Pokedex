import { useEffect, useState } from "react";

export default function Evolutions({ evolutions, hidden }) {
  const [firstPhase, setFirstPhase] = useState([]);
  const [secondPhase, setSecondPhase] = useState([]);
  const [thirdPhase, setThirdPhase] = useState([]);

  useEffect(() => {
    try {
      fetch(
        `https://pokedex-backend-vulgo-rnt.vercel.app/imgPokemon/${evolutions[0]}`
      )
        .then((res) => res.json())
        .then((res) => setFirstPhase(res));
      evolutions[1].forEach((param) => {
        fetch(
          `https://pokedex-backend-vulgo-rnt.vercel.app/imgPokemon/${param}`
        )
          .then((res) => res.json())
          .then((res) => {
            setSecondPhase((old) => [...old, res]);
          });
      });
      evolutions[2].forEach((param) => {
        fetch(
          `https://pokedex-backend-vulgo-rnt.vercel.app/imgPokemon/${param}`
        )
          .then((res) => res.json())
          .then((res) => setThirdPhase((old) => [...old, res]));
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div hidden={hidden}>
      {firstPhase.length > 0 && (
        <img style={{ width: "50px" }} src={firstPhase[1]} />
      )}
      {secondPhase.length > 0 && (
        <img
          style={{ width: "50px" }}
          src={secondPhase[0][1] || secondPhase[0][0]}
        />
      )}
      {thirdPhase.length > 0 && (
        <img
          style={{ width: "50px" }}
          src={thirdPhase[0][1] || thirdPhase[0][0]}
        />
      )}
    </div>
  );
}

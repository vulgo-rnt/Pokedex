import { useEffect, useState } from "react";

export default function Evolutions({ evolutions }) {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    fetch(`http://192.168.0.95:4111/imgPokemon/${evolutions[0]}`)
      .then((res) => res.json())
      .then((res) => setImgs(res));
  });

  return (
    <div>
      <img style={{ width: "50px" }} src={imgs[1]} />
    </div>
  );
}

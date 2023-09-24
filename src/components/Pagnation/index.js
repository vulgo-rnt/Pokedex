function Pagnation({ value, set }) {
  let arrayNums = [];
  let numButtons = Math.ceil(value / 25);

  for (let i = 1; i <= numButtons; i++) {
    arrayNums.push(i);
  }

  return (
    <>
      {arrayNums.map((num) => {
        return (
          <button
            key={num}
            onClick={(event) => {
              set(Number(event.target.innerText));
            }}
          >
            {num}
          </button>
        );
      })}
    </>
  );
}

export default Pagnation;

import { useState } from "react";
import styled from "styled-components";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const ButtonContanier = styled.button`
  border: none;
  font-family: "Pokemon Classic Regular";
  font-size: 8px;
`;

function Pagnation({ value, set }) {
  const [buttonsLink, setButtonsLink] = useState([1, 2, 3, 4, 5]);
  let maxNumButtons = Math.ceil(value / 25);

  const nextButtons = (direction) => {
    let cacheOldValue;

    const arrayTread = buttonsLink.map((buttonValue, index, arr) => {
      if (buttonValue < maxNumButtons && direction === "+") {
        return buttonValue + 4;
      } else if (direction === "-") {
        if (buttonValue) {
          cacheOldValue = buttonValue;
          return buttonValue - 4;
        } else {
          const cache = cacheOldValue;
          cacheOldValue -= 1;
          return cache - 5;
        }
      }
    });

    setButtonsLink(arrayTread);
  };

  return (
    <>
      {buttonsLink[0] > 1 && (
        <HiArrowNarrowLeft onClick={() => nextButtons("-")} />
      )}
      {buttonsLink.map((num) => {
        if (num) {
          return (
            <ButtonContanier
              key={num}
              onClick={(event) => {
                set(Number(event.target.innerText));
              }}
            >
              {num}
            </ButtonContanier>
          );
        }
      })}
      {buttonsLink[4] && (
        <HiArrowNarrowRight onClick={() => nextButtons("+")} />
      )}
    </>
  );
}

export default Pagnation;

function PokeName({ children }) {
  const nameInArray = children.split(" ");
  if (nameInArray.length === 4) {
    return (
      <p>
        {`${nameInArray[0]} ${nameInArray[1]}`}
        <br />
        {`${nameInArray[2]} ${nameInArray[3]}`}
      </p>
    );
  } else if (nameInArray.length === 3) {
    return (
      <p>
        {nameInArray[0]}
        <br />
        {`${nameInArray[1]} ${nameInArray[2]}`}
      </p>
    );
  } else {
    return <p>{children}</p>;
  }
}

export default PokeName;

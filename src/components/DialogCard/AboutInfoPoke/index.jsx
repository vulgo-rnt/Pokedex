function AboutInfoPoke({ info, hidden }) {
  return (
    <div hidden={hidden}>
      <span>{info.description}</span>
    </div>
  );
}

export default AboutInfoPoke;

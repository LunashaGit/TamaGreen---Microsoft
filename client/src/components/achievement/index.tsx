const Achievement = () => {
  const nbr: number[] = [];
  for (let i: number = 1; i <= 16; i++) {
    nbr.push(i);
  }
  return (
    <div className="grid grid-cols-2 gap-8 p-6">
      {nbr &&
        nbr.map((nb) => (
          <img src={`./images/achievements/achiev-${nb}.png`} alt={`${nb}`} />
        ))}
    </div>
  );
};

export default Achievement;

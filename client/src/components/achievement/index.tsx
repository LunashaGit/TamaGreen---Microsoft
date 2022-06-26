const Achievement = () => {
  const nbr: number[] = [];
  for (let i: number = 1; i <= 16; i++) {
    nbr.push(i);
  }
  return (
    <>
    <h3 className="text-4xl font-bold text-center text-[#246A73] drop-shadow-md">Achievements</h3>
    <div className="grid grid-cols-2 gap-8 p-6 border-2 rounded-lg border-[#246A73] shadow-md m-3">
      {nbr &&
        nbr.map((nb) => (
          <img
            src={`./images/achievements/achiev-${nb}.png`}
            alt={`${nb}`}
            className={`animate-achivAnim ease-in-out duration-[${nb}000ms]`}
          />
        ))}
    </div></>
  );
};

export default Achievement;

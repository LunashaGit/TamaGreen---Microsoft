import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadStats } from "../../redux/actions/user.actions";

const Questions = () => {
  const questionData = useSelector((state: any) => state.questionReducer);
  const userData = useSelector((state: any) => state.userReducer);
  const [count, setCount] = useState<number>(0);
  const [energy, setEnergy] = useState<number>();
  const [ecology, setEcology] = useState<number>();
  const [health, setHealth] = useState<number>();
  const [wellBeing, setWellBeing] = useState<number>();
  const [money, setMoney] = useState<number>();
  const [popInfo, setPopInfo] = useState<boolean>(false);
  const dispatch = useDispatch();
  const show = questionData[count];
  // console.log(show);
  //console.log(userData);

  useEffect(() => {
    setEnergy(userData.energy);
    setEcology(userData.ecology);
    setHealth(userData.health);
    setWellBeing(userData.wellBeing);
    setMoney(userData.money);
  }, [userData]);

  const handleRight = () => {
    if (energy && energy > 1) {
      if (count <= 4) {
        const tmpEnergy = energy - 2;
        const tmpEcology = ecology + show.ecologyA;
        const tmpHealth = health + show.healthA;
        const tmpWellBeing = ecology + show.wellBeingA;
        const tmpMoney = health + show.moneyA;

        const data = {
          energy: tmpEnergy,
          ecology: tmpEcology,
          health: tmpHealth,
          wellBeing: tmpWellBeing,
          money: tmpMoney,
        };

        dispatch<any>(uploadStats(data, userData._id));
        setPopInfo(!popInfo);

        setEnergy(tmpEnergy);
        setEcology(tmpEcology);
        setHealth(tmpHealth);
        setWellBeing(tmpWellBeing);
        setMoney(tmpMoney);
      } else {
        console.log("erreur A1");
      }
    } else {
      console.log("erreur A2");
    }
  };
  const handleLeft = () => {
    if (energy && energy > 1) {
      if (count <= 4) {
        const tmpEnergy = energy - 2;
        const tmpEcology = ecology + show.ecologyB;
        const tmpHealth = health + show.healthB;
        const tmpWellBeing = ecology + show.wellBeingB;
        const tmpMoney = health + show.moneyB;

        const data = {
          energy: tmpEnergy,
          ecology: tmpEcology,
          health: tmpHealth,
          wellBeing: tmpWellBeing,
          money: tmpMoney,
        };
        dispatch<any>(uploadStats(data, userData._id));
        setPopInfo(!popInfo);

        setEnergy(tmpEnergy);
        setEcology(tmpEcology);
        setHealth(tmpHealth);
        setWellBeing(tmpWellBeing);
        setMoney(tmpMoney);
      } else {
        console.log("erreur B1");
      }
    } else {
      console.log("erreur B2");
    }
  };
  const handleInfo = () => {
    setCount(count + 1);
    setPopInfo(!popInfo);
  };

  return (
    <section className="ml-6 px-6 h-full grid gap-4 grid-rows-6">
      <div className="bg-gray-500 rounded-xl row-span-2 flex justify-center items-center p-3">
        <h3 className="text-center">{show && show.question}</h3>
      </div>
      <div className="bg-gray-500 rounded-xl row-span-4 relative mb-2">
        <p>energy :{energy}</p>
        <p>ecology :{ecology}</p>
        <p>health :{health}</p>
        <p>wellBeing :{wellBeing}</p>
        <p>money :{money}</p>
        <button
          className="absolute w-28 h-12 border border-black bg-white -bottom-2 -left-2 rounded-lg"
          onClick={() => handleRight()}
        >
          {show && show.answerA}
        </button>
        <button
          className="absolute w-28 h-12 border border-black bg-white -bottom-2 -right-2 rounded-lg"
          onClick={() => handleLeft()}
        >
          {show && show.answerB}
        </button>
      </div>
      {popInfo && (
        <div className="absolute top-0 left-0 bg-black/90 w-screen h-screen z-20 flex items-center justify-center">
          <div className="bg-white h-52 w-60 flex flex-col items-center justify-between p-6">
            <p className="text-center">{show.didUKnow}</p>
            <button
              className="w-28 h-12 border border-black bg-white -bottom-2 -right-2 rounded-lg"
              onClick={handleInfo}
            >
              Okay !
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Questions;

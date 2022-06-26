import {
  faBolt,
  faFaceLaughBeam,
  faHeartPulse,
  faLeaf,
  faMoneyBill1,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const [popNoEnergy, setPopNoEnergy] = useState<boolean>(false);
  const [popFunFact, setPopFunFact] = useState<boolean>(false);
  const dispatch = useDispatch();
  const show = questionData[count];
  // console.log(show);
  //console.log(userData);

  useEffect(()=>{
    if(count >= 5){
      setPopFunFact(!popFunFact)
    }
  },[count])
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
        setPopFunFact(!popFunFact)
      }
    } else {
      setPopNoEnergy(!popNoEnergy)
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
        setPopFunFact(!popFunFact)
      }
    } else {
      setPopNoEnergy(!popNoEnergy)
    }
  };
  const handleInfo = () => {
    setCount(count + 1);
    setPopInfo(!popInfo);
  };
  const closeEnergy = () => {
    setPopNoEnergy(!popNoEnergy);
  };
  console.log(count)
  const closeFunFact = () => {
      setPopFunFact(!popFunFact);
      setCount(0);
  };
  
  return (
    <section className="ml-6 px-6 h-full grid gap-4 grid-rows-6">
      <div className="bg-[#160F29] rounded-xl row-span-2 flex justify-center items-center p-3">
        <h3 className="text-center text-white">{show && show.question}</h3>
      </div>
      <div className="text-white drop-shadow-md row-span-4 px-10 py-16 relative flex flex-col items-center justify-between mb-2 bg-[url('../../public/images/whatagotchi_empty.png')] bg-cover">
        <div
          className={`${
            energy && energy < 5
              ? "bg-red-500"
              : energy && energy < 8
              ? "bg-yellow-500"
              : "bg-green-500"
          } w-40 h-40 absolute shadow-md top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-[url('../../public/images/cell_phones_hello.png')] bg-cover`}
        />
        <div className="flex justify-between w-full">
          <p>
            <FontAwesomeIcon icon={faBolt} /> {energy} / 11
          </p>
          <p>
            <FontAwesomeIcon icon={faMoneyBill1} /> {money}
          </p>
        </div>
        <div className="flex justify-between w-full">
          <p>
            <FontAwesomeIcon icon={faLeaf} /> {ecology}%
          </p>
          <p>
            <FontAwesomeIcon icon={faHeartPulse} /> {health}%
          </p>
          <p>
            <FontAwesomeIcon icon={faFaceLaughBeam} /> {wellBeing}%
          </p>
        </div>
        <button
          className="absolute w-32 h-12 border  bg-[#160F29] -bottom-2 left-2 rounded-lg"
          onClick={() => handleRight()}
        >
          {show && show.answerA}
        </button>
        <button
          className="absolute w-32 h-12 border  bg-[#160F29] -bottom-2 right-2 rounded-lg"
          onClick={() => handleLeft()}
        >
          {show && show.answerB}
        </button>
      </div>
      {popInfo && (
        <div className="absolute top-0 left-0 bg-black/90 w-screen h-screen z-20 flex items-center justify-center">
          <div className="bg-white w-60 flex flex-col items-center justify-between p-6">
          <h3 className="text-center text-2xl font-bold">Explain</h3>
            <p className="text-center my-6">{show.didUKnow}</p>
            <button
              className="w-28 h-12 border bg-[#246A73] text-white -bottom-2 -right-2 rounded-lg"
              onClick={handleInfo}
            >
              Okay !
            </button>
          </div>
        </div>
      )}
      {popNoEnergy && (
        <div className="absolute top-0 left-0 bg-black/90 w-screen h-screen z-20 flex items-center justify-center">
          <div className="bg-white w-60 flex flex-col items-center justify-between p-6">
          <h3 className="text-center text-2xl font-bold">Out of energy</h3>
            <p className="text-center my-6">You have no more energy ! Please wait or refill</p>
            <button
              className="w-28 h-12 border bg-[#246A73] text-white -bottom-2 -right-2 rounded-lg"
              onClick={closeEnergy}
            >
              Okay !
            </button>
          </div>
        </div>
      )}
      {popFunFact && (
        <div className="absolute top-0 left-0 bg-black/90 w-screen h-screen z-20 flex items-center justify-center">
          <div className="bg-white w-72 flex flex-col items-center justify-between p-6">
            <h3 className="text-center text-2xl font-bold">Fun fact</h3>
            <p className="text-center my-6">Do you know that if you produce an exceed of energy, you will return it and pay an additionnal cost. 
            So CONSUME your energy when there is a peak of green energy production</p>
            <button
              className="w-28 h-12 border bg-[#246A73] text-white -bottom-2 -right-2 rounded-lg"
              onClick={closeFunFact}
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

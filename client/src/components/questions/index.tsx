import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadStats } from "../../redux/actions/user.actions";

const Questions = () => {
  const questionData = useSelector((state: any) => state.questionReducer);
  const userData = useSelector((state: any) => state.userReducer);
  const [count, setCount] = useState<number>(0);
  const [energy, setEnergy] = useState<any>(0);
  const [ecology, setEcology] = useState<any>(1);
  const [health, setHealth] = useState<any>(2);
  const [wellBeing, setWellBeing] = useState<any>(3);
  const [money, setMoney] = useState<any>(410);
  const dispatch = useDispatch();
  const show = questionData[count];
  console.log(show);
  console.log(userData);

  const handleResponse = (e: string) => {
    if (count <= 4) {
      setEnergy(userData.energy - 2);
      const data = { energy, ecology, health, wellBeing, money };

      dispatch<any>(uploadStats(data, userData._id));
      setCount(count + 1);
    }
  };

  return (
    <section className="ml-6 px-6 h-full grid gap-4 grid-rows-6">
      <div className="bg-gray-500 rounded-xl row-span-2 flex justify-center items-center p-3">
        <h3 className="text-center">{show && show.question}</h3>
      </div>
      <div className="bg-gray-500 rounded-xl row-span-4 relative mb-2">
        <p>energy :{userData.energy}</p>
        <p>ecology :{userData.ecology}</p>
        <p>health :{userData.health}</p>
        <p>wellBeing :{userData.wellBeing}</p>
        <p>money :{userData.money}</p>
        <button
          className="absolute w-28 h-12 border border-black bg-white -bottom-2 -left-2 rounded-lg"
          onClick={() => handleResponse("A")}
        >
          {show && show.answerA}
        </button>
        <button
          className="absolute w-28 h-12 border border-black bg-white -bottom-2 -right-2 rounded-lg"
          onClick={() => handleResponse("B")}
        >
          {show && show.answerB}
        </button>
      </div>
    </section>
  );
};

export default Questions;

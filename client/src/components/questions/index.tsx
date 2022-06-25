import { useState } from "react";
import { useSelector } from "react-redux";

const Questions = () => {
  const questionData = useSelector((state: any) => state.questionReducer);
  const userData = useSelector((state: any) => state.userReducer);
  const [count, setCount] = useState<number>(0);
  const show = questionData[count];
  console.log(show);
  console.log(userData);

  const handleResponse = (e: string) => {
    if (count <= 4) {
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
        <p>happiness :{userData.happiness}</p>
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

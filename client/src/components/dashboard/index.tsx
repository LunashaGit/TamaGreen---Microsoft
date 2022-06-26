import { useEffect, useRef, useState } from "react";
import { faCertificate, faHandHoldingDollar, faPeopleGroup, faPlugCircleExclamation, faRankingStar, faShop, faSolarPanel, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const dashboardData = [
  {
      id : 1,
      title: "Shop",
      color: "cyan-100",
      logo: <FontAwesomeIcon icon={faShop} />,
  },
  {
      id : 2,
      title: "Money",
      color: "gray-600",
      logo: <FontAwesomeIcon icon={faHandHoldingDollar} />
  },
  {
      id : 3,
      title: "Consum",
      color: "red-600",
      logo: <FontAwesomeIcon icon={faPlugCircleExclamation} />
  },
  {
      id : 4,
      title: "Family",
      color: "yellow-600",
      logo: <FontAwesomeIcon icon={faPeopleGroup} />
  },
  {
      id : 5,
      title: "Production",
      color: "white",
      logo: <FontAwesomeIcon icon={faSolarPanel} />
  },
  {
      id : 6,
      title: "Podium",
      color: "blue-600",
      logo: <FontAwesomeIcon icon={faRankingStar} />
  },
  {
      id : 7,
      title: "Badges",
      color: "purple-600",
      logo: <FontAwesomeIcon icon={faCertificate} />
  },
  {
      id : 8,
      title: "Ranking",
      color: "lime-300",
      logo: <FontAwesomeIcon icon={faTrophy} />
  },
  {
      id : 9,
      title: "Profil",
      color: "amber-300",
      logo: <FontAwesomeIcon icon={faUser} />
  },
      
]


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const clickOut = (e: Event) => {
      if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOut);
    return () => {
      document.addEventListener("mousedown", clickOut);
    };
  }, [isOpen]);
  
  return (
    <div ref={ref}
      className={`bg-[#160F29] h-[calc(100%-0.25rem)] ${
        isOpen ? "w-[calc(100%-1rem)]" : "w-6"
      }  rounded-r-xl transition-all ease-in-out duration-300 absolute top-0 shadow-md z-10`}
    > <div className="flex items-center gap-4 justify-center relative w-full h-full">
      {isOpen && <div className=" grid grid-cols-3 gap-4">
  {dashboardData.map((icon) => (
    <div key={icon.id} className={`w-20 h-20 flex flex-col p-2 justify-between hover:scale-105 content-center text-3xl border-2 border-[#368F8B] rounded-md items-center text-[#368F8B]`}>{icon.logo}<p className="text-white text-sm text-center">{icon.title}</p></div>
     
  ))}
  </div>}


    <button
      className="bg-white w-1 h-20 rounded-xl mr-1"
      onClick={() => setIsOpen(!isOpen)}
    /></div>

    </div>
  
  );
};

export default Dashboard;

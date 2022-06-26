import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Logout from "../log/Logout";

type propsNav = {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
};

const Navigation = ({ page, setPage }: propsNav) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLUListElement | null>(null);

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

  const handleLink = (e: string) => {
    setPage(e);
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full p-3 flex justify-between items-center h-16 relative">
      <h1>TamaGreen</h1>
      <FontAwesomeIcon
        icon={faGear}
        className={`text-4xl text-[#246A73] drop-shadow-md ${isOpen ? "animate-[spin_2s_infinite]" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      />
      <ul
        ref={ref}
        className={`bg-white border absolute right-10 z-10 w-40 rounded-tl-md rounded-bl-md rounded-br-md shadow-md transition-all ease-in-out duration-300 ${
          isOpen ? "block opacity-100 top-10" : "hidden opacity-0 top-0"
        }`}
      >
        <li
          className="px-3 py-1.5 hover:shadow-md"
          onClick={() => handleLink("home")}
        >
          Home
        </li>
        <li
          className="px-3 py-1.5 hover:shadow-md"
          onClick={() => handleLink("profil")}
        >
          Profil
        </li>
        <li
          className="px-3 py-1.5 hover:shadow-md"
          value={"achievement"}
          onClick={() => handleLink("achievement")}
        >
          Achievement
        </li>
        <li
          className="px-3 py-1.5 hover:shadow-md"
          onClick={() => handleLink("ranking")}
        >
          Ranking
        </li>
        <Logout />
      </ul>
    </nav>
  );
};

export default Navigation;

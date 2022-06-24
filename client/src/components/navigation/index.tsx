import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav className="w-full p-3 flex justify-between items-center">
      <h1>TamaBeCode</h1>
      <FontAwesomeIcon icon={faGear} className="text-4xl" />
    </nav>
  );
};

export default Navigation;

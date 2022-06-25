import { iconClasses } from "@mui/material";
import { useState } from "react";
import  {dashboardData} from "./display";


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <div
      className={`bg-gray-500 h-[calc(100%-0.25rem)] ${
        isOpen ? "w-[calc(100%-1rem)]" : "w-6"
      }  flex items-center justify-center rounded-r-xl transition-all ease-in-out duration-300 absolute top-0 shadow-md z-10`}
    >
      <div className="w-screen grid grid-cols-3 ">
  {dashboardData && dashboardData.map((icon) => (
    isOpen ? ( <div key={icon.id} className="flex flex-col justify-center items-center h-36"><i className={`${icon.color} mb-1`}>{icon.logo}</i><p>{icon.title}</p></div>
     ): ""
  ))}
  </div>


    <button
      className="bg-gray-800 w-1 h-20 rounded-xl pr-2 mr-2"
      onClick={() => setIsOpen(!isOpen)}
    />

    </div>
  
  );
};

export default Dashboard;

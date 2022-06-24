import { useState } from "react";

type dashProps = {
  page: string;
};
const Dashboard = ({ page }: dashProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className={`bg-gray-500 h-[calc(100%-0.25rem)] ${
        page === "home"
          ? isOpen
            ? "w-[calc(100%-1rem)]"
            : "w-6"
          : "w-[calc(100%-1rem)]"
      } pr-2 flex items-center justify-end rounded-r-xl transition-all ease-in-out duration-300 absolute top-0 shadow-md `}
    >
      <button
        className="bg-gray-800 w-1 h-20 rounded-xl"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default Dashboard;

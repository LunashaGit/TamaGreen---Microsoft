import { useSelector } from "react-redux";
import Card from "./Card";


const Ranking = () => {
  const usersData = useSelector((state:any) => state.usersReducer);
  const numAscending = [...usersData].sort((a, b) => b.score - a.score);
  //console.log(numAscending);
  return (
    <div>
      <h3 className="text-4xl font-bold text-center text-[#246A73] drop-shadow-md">Ranking</h3>
      <div className="flex flex-col items-center justify-center border-2 rounded-lg border-[#246A73] shadow-md m-3">
      {numAscending && numAscending.slice(0,1).map((users:any)=>(
        
        <Card key={users._id} users={users} win={1}/>
      ))}
      {numAscending && numAscending.slice(1,2).map((users:any)=>(
        
        <Card key={users._id} users={users} win={2}/>
      ))}
      {numAscending && numAscending.slice(2,3).map((users:any)=>(
        
        <Card key={users._id} users={users} win={3}/>
      ))}
      {numAscending && numAscending.slice(4,100).map((users:any)=>(
        
        <Card key={users._id} users={users} win={0}/>
      ))}
    </div>
    </div>
  );
};

export default Ranking;

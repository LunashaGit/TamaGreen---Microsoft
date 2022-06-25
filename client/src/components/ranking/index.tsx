import { useSelector } from "react-redux";
import Card from "./Card";


const Ranking = () => {
  const usersData = useSelector((state:any) => state.usersReducer);
  const numAscending = [...usersData].sort((a, b) => b.score - a.score);
  //console.log(numAscending);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Ranking</h1>
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
  );
};

export default Ranking;

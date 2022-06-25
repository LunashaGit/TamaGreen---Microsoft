import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  
const Card = ({users, win}:any) => {
    let colors = "";
    let verify = false;
    let scale = ""
    switch(win){
        case 1 :
              colors = "text-amber-400"
              scale = "scale-150"
              verify = true;
              break
        case 2 :
              colors = "text-gray-400" 
              scale = "scale-125"
              verify = true;
              break
        case 3 :
              colors = "text-yellow-600"
              scale = "scale-110"
              verify = true;
              break
              default:
                colors = ""
                scale = "scale-100"
                verify = false;
                break
    }

    return (
        <div className={`${scale} p-3 flex flex-col items-center justify-center`}>
        <h2>{users.pseudo} {users.score}</h2>
       {verify && <FontAwesomeIcon icon={faTrophy} className={`${colors} text-3xl`}/>} 
        </div>
       

    )
}
export default Card;
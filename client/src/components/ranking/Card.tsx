import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  
const Card = ({users, win}:any) => {
    let colors = "";
    let verify = false;
    let scale = ""
    let marg = ""
    switch(win){
        case 1 :
              colors = "text-amber-400"
              scale = "scale-150"
              verify = true
              marg = "ml-8"
              break
        case 2 :
              colors = "text-gray-400" 
              scale = "scale-125"
              verify = true;
              marg = "ml-4"
              break
        case 3 :
              colors = "text-yellow-600"
              scale = "scale-110"
              verify = true;
              marg = "ml-2"
              break
              default:
                colors = ""
                scale = "scale-100"
                verify = false;
                marg = "ml-0"
                break
    }

    return (
        <div className={` p-3 flex items-center justify-center shadow-sm w-full hover:bg-black/10`}>
        <h2 className={`${scale}`}>{users.pseudo} : <b>{users.score}</b></h2>
       {verify && <FontAwesomeIcon icon={faTrophy} className={`${colors} ${marg} text-3xl`}/>} 
        </div>
       

    )
}
export default Card;
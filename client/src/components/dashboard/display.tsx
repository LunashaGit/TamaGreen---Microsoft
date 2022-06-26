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
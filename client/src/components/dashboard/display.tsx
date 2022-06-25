import { faCertificate, faEuroSign, faHandHoldingDollar, faPeopleGroup, faPlugCircleExclamation, faRankingStar, faShop, faSolarPanel, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const dashboardData = [
    {
        id : 1,
        title: "Shop",
        color: "text-gray-400",
        logo: <FontAwesomeIcon icon={faShop} />,
    },
    {
        id : 2,
        title: "Money saved",
        color: "text-gray-600",
        logo: <FontAwesomeIcon icon={faHandHoldingDollar} />
    },
    {
        id : 3,
        title: "Consumption",
        color: "text-red-600",
        logo: <FontAwesomeIcon icon={faPlugCircleExclamation} />
    },
    {
        id : 4,
        title: "Family",
        color: "text-yellow-600",
        logo: <FontAwesomeIcon icon={faPeopleGroup} />
    },
    {
        id : 5,
        title: "Production",
        color: "text-brown-600",
        logo: <FontAwesomeIcon icon={faSolarPanel} />
    },
    {
        id : 6,
        title: "Podium",
        color: "text-blue-600",
        logo: <FontAwesomeIcon icon={faRankingStar} />
    },
    {
        id : 7,
        title: "Badges",
        color: "text-purple-600",
        logo: <FontAwesomeIcon icon={faCertificate} />
    },
    {
        id : 8,
        title: "Badges",
        color: "text-stone-300",
        logo: <FontAwesomeIcon icon={faTrophy} />
    },
    {
        id : 9,
        title: "Profil",
        color: "text-stone-300",
        logo: <FontAwesomeIcon icon={faUser} />
    },
        
]
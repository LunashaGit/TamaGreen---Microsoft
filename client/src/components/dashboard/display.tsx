import { faCertificate, faHandHoldingDollar, faPeopleGroup, faPlugCircleExclamation, faRankingStar, faShop, faSolarPanel, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const dashboardData = [
    {
        id : 1,
        title: "Shop",
        color: "text-cyan-100",
        logo: <FontAwesomeIcon icon={faShop} size="2x" />,
    },
    {
        id : 2,
        title: "Money saved",
        color: "text-gray-600",
        logo: <FontAwesomeIcon icon={faHandHoldingDollar} size="2x" />
    },
    {
        id : 3,
        title: "Consumption",
        color: "text-red-600",
        logo: <FontAwesomeIcon icon={faPlugCircleExclamation} size="2x" />
    },
    {
        id : 4,
        title: "Family",
        color: "text-yellow-600",
        logo: <FontAwesomeIcon icon={faPeopleGroup} size="2x" />
    },
    {
        id : 5,
        title: "Production",
        color: "text-brown-600",
        logo: <FontAwesomeIcon icon={faSolarPanel} size="2x" />
    },
    {
        id : 6,
        title: "Podium",
        color: "text-blue-600",
        logo: <FontAwesomeIcon icon={faRankingStar} size="2x" />
    },
    {
        id : 7,
        title: "Badges",
        color: "text-purple-600",
        logo: <FontAwesomeIcon icon={faCertificate} size="2x" />
    },
    {
        id : 8,
        title: "Ranking",
        color: "text-lime-300",
        logo: <FontAwesomeIcon icon={faTrophy} size="2x" />
    },
    {
        id : 9,
        title: "Profil",
        color: "text-amber-300",
        logo: <FontAwesomeIcon icon={faUser} size="2x" />
    },
        
]
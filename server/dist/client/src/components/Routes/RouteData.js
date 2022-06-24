"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteData = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
exports.RouteData = [
    {
        id: 1,
        name: "Login",
        link: "/signin",
        show: "noLog",
        icon: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowRightToBracket }),
    },
    {
        id: 2,
        name: "Sign up",
        link: "/signup",
        show: "noLog",
        icon: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUserPlus }),
    },
    {
        id: 4,
        name: "Profil",
        link: "/profil",
        show: "log",
        icon: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUser }),
    },
    {
        id: 5,
        name: "Spots",
        link: "/spots",
        show: "log",
        icon: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faLocationDot }),
    },
];
//# sourceMappingURL=RouteData.js.map
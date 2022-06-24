"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const AppContext_1 = require("./AppContext");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_router_dom_1 = require("react-router-dom");
const Logout_1 = __importDefault(require("./Log/Logout"));
const material_1 = require("@mui/material");
const RouteData_1 = require("./Routes/RouteData");
const user_actions_1 = require("../actions/user.actions");
const Navbar = () => {
    const uid = (0, react_1.useContext)(AppContext_1.UidContext);
    const ref = (0, react_1.useRef)(null);
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [isOpenBis, setIsOpenBis] = (0, react_1.useState)(false);
    const [notif, setNotif] = (0, react_1.useState)(true);
    const userData = (0, react_redux_1.useSelector)((state) => state.userReducer);
    const allUsersData = (0, react_redux_1.useSelector)((state) => state.usersReducer);
    const location = (0, react_router_dom_1.useLocation)();
    const roads = RouteData_1.RouteData;
    const boxNotifs = userData.friendRequestReceived;
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        if (boxNotifs !== undefined) {
            !boxNotifs.length ? setNotif(true) : setNotif(false);
        }
    }, [notif, boxNotifs]);
    (0, react_1.useEffect)(() => {
        const clickOut = (e) => {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
                setIsOpenBis(false);
            }
        };
        document.addEventListener("mousedown", clickOut);
        return () => {
            document.addEventListener("mousedown", clickOut);
        };
    }, [isOpen]);
    const handleValidFriend = (idToAccept) => {
        dispatch((0, user_actions_1.acceptFriend)(idToAccept, userData._id));
        dispatch((0, user_actions_1.deleteFriend)(idToAccept, userData._id));
    };
    const handleDeleteFriend = (idToDelete) => {
        dispatch((0, user_actions_1.deleteFriend)(idToDelete, userData._id));
    };
    return ((0, jsx_runtime_1.jsxs)("nav", Object.assign({ className: `bg-primary shadow-md left-2/4 -translate-x-2/4 w-full z-10 max-w-[260px] ml-6 md:ml-0 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto py-3 mt-6 px-6 flex items-center justify-between text-white drop-shadow-md ${location.pathname === "/profil" ? "fixed" : "absolute"}` }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/" }, { children: (0, jsx_runtime_1.jsxs)("h1", Object.assign({ className: `text-xl md:text-3xl text-white` }, { children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUserGroup }), " Friend Finder"] })) })), roads && ((0, jsx_runtime_1.jsx)("div", Object.assign({ ref: ref, className: `grow flex items-center justify-end` }, { children: uid ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.Badge, Object.assign({ color: "secondary", overlap: "circular", badgeContent: " ", variant: "dot", invisible: notif }, { children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { alt: "userPicture", src: userData.picture, className: "cursor-pointer", onClick: () => setIsOpen(!isOpen) }) })), isOpen && ((0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: "absolute bg-white text-black w-60 right-12 top-12" }, { children: [(0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "text-xl px-3 py-1.5 flex hover:bg-black/5 cursor-pointer", onClick: () => setIsOpenBis(!isOpenBis) }, { children: [" ", (0, jsx_runtime_1.jsxs)(material_1.Badge, Object.assign({ color: "secondary", badgeContent: " ", variant: "dot", invisible: notif, className: "w-full" }, { children: [(0, jsx_runtime_1.jsxs)("i", Object.assign({ className: `w-10 flex justify-center items-center text-primary ${isOpenBis ? "-rotate-90" : ""}` }, { children: [" ", (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCaretLeft }), " "] })), "Notifications"] })), isOpenBis && ((0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "absolute top-10 md:top-5 left-0 md:-left-1 md:-translate-x-full bg-white text-black " }, { children: boxNotifs &&
                                                boxNotifs.map((usenotif) => {
                                                    let notifData = allUsersData.filter((user) => user._id === usenotif);
                                                    let newNotif = notifData[0];
                                                    // console.log(newNotif);
                                                    return ((0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "text-lg md:text-xl px-3 py-1.5 flex items-center justify-between hover:bg-black/5" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex items-center w-44 md:w-60 pr-3" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Avatar, { alt: "userPicture", src: newNotif.picture, className: "shadow-md" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "ml-3 flex flex-col" }, { children: [(0, jsx_runtime_1.jsxs)("h4", { children: [newNotif.firstName, " ", newNotif.lastName] }), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "hidden md:block text-sm italic" }, { children: "Want to be your friend" }))] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex justify-between items-center w-16 " }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => handleDeleteFriend(newNotif._id), className: "border-2 rounded-full p-1 w-6 h-6 flex justify-center items-center text-red shadow-md" }, { children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faX, className: `text-xs ` }) })), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => handleValidFriend(newNotif._id), className: "border-2 rounded-full p-1 w-8 h-8 flex justify-center items-center text-green shadow-md" }, { children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faV, className: `text-base ` }) }))] }))] }), newNotif._id));
                                                }) })))] })), roads
                                    .filter((road) => road.show === "log")
                                    .map((road) => {
                                    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: road.link }, { children: (0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "text-xl px-3 py-1.5 flex hover:bg-black/5 cursor-pointer" }, { children: [(0, jsx_runtime_1.jsxs)("i", Object.assign({ className: "w-10 flex justify-center items-center text-primary" }, { children: [" ", road.icon, " "] })), road.name] })) }), road.id));
                                }), (0, jsx_runtime_1.jsx)(Logout_1.default, {})] })))] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faGear, onClick: () => setIsOpen(!isOpen), className: "text-3xl hover:animate-spin cursor-pointer" }), isOpen && ((0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "absolute bg-white text-black w-60 right-12 top-12" }, { children: roads
                                .filter((road) => road.show === "noLog")
                                .map((road) => {
                                return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: road.link }, { children: (0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "text-xl px-3 py-1.5 flex hover:bg-black/5 cursor-pointer" }, { children: [(0, jsx_runtime_1.jsxs)("i", Object.assign({ className: "w-10 flex justify-center items-center text-primary" }, { children: [" ", road.icon, " "] })), road.name] })) }), road.id));
                            }) })))] })) })))] })));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map
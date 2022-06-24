"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const Spacing_1 = __importDefault(require("../components/Spacing"));
const user_actions_1 = require("./../actions/user.actions");
const styles_1 = require("@mui/material/styles");
const Profil = () => {
    const userData = (0, react_redux_1.useSelector)((state) => state.userReducer);
    const [file, setFile] = (0, react_1.useState)();
    const [toggleImg, setToggleImg] = (0, react_1.useState)(false);
    const dispatch = (0, react_redux_1.useDispatch)();
    const handlePicture = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", userData.pseudo);
        data.append("userId", userData._id);
        data.append("file", file);
        dispatch((0, user_actions_1.uploadPicture)(data, userData._id));
        setToggleImg(false);
    };
    (0, react_1.useEffect)(() => {
        setToggleImg(!toggleImg);
    }, [file]);
    const Input = (0, styles_1.styled)("input")({
        display: "none",
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("header", Object.assign({ className: "h-[70vh] md:h-[50vh] lg:h-[30rem]" }, { children: (0, jsx_runtime_1.jsx)("div", { className: "fixed top-0 -z-10 h-full w-full bg-cover bg-center bg-[url(https://source.unsplash.com/random)] after:content-[''] after:absolute after:w-full after:h-full after:bg-gradient-to-b from-black/70`" }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "h-screen w-screen bg-white" }, { children: (0, jsx_runtime_1.jsxs)(Spacing_1.default, { children: [(0, jsx_runtime_1.jsx)("img", { src: userData.picture, alt: "user-pic", className: " rounded-full border-4 border-white w-40 h-40 md:w-52 md:h-52 absolute top-0 left-6 sm:left-0 -translate-y-1/3" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex justify-between items-start" }, { children: [(0, jsx_runtime_1.jsx)("form", Object.assign({ action: "", onSubmit: handlePicture, className: "flex items-end justify-center ml-3 md:ml-0 w-40 md:w-52 h-24 md:h-32 lg:h-28" }, { children: toggleImg ? ((0, jsx_runtime_1.jsxs)("label", Object.assign({ htmlFor: "contained-button-file", className: "w-full" }, { children: [(0, jsx_runtime_1.jsx)(Input, { accept: ".jpg, .jpeg, .png", id: "contained-button-file", multiple: true, type: "file", onChange: (e) => setFile(e.target.files[0]) }), (0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ variant: "contained", component: "span", fullWidth: true }, { children: "Upload" }))] }))) : ((0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ type: "submit", variant: "contained", fullWidth: true }, { children: "Save picture" }))) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-col items-end" }, { children: [(0, jsx_runtime_1.jsxs)("h2", Object.assign({ className: "text-xl md:text-3xl lg:text-5xl font-bold" }, { children: [userData.firstName, " ", userData.lastName] })), (0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "text-xl md:text-2xl lg:text-4xl font-semibold italic" }, { children: userData.pseudo }))] }))] }))] }) }))] }));
};
exports.default = Profil;
//# sourceMappingURL=profil.js.map
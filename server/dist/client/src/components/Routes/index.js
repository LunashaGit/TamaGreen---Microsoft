"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./../../pages/Home"));
const Navbar_1 = __importDefault(require("../Navbar"));
const profil_1 = __importDefault(require("./../../pages/profil"));
const spots_1 = __importDefault(require("../../pages/spots"));
const signin_1 = __importDefault(require("../../pages/signin"));
const signup_1 = __importDefault(require("../../pages/signup"));
const react_1 = require("react");
const AppContext_1 = require("../AppContext");
const index = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const uid = (0, react_1.useContext)(AppContext_1.UidContext);
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), uid && (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/profil", element: (0, jsx_runtime_1.jsx)(profil_1.default, {}) }), !uid && (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/signin", element: (0, jsx_runtime_1.jsx)(signin_1.default, {}) }), !uid && (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/signup", element: (0, jsx_runtime_1.jsx)(signup_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/spots", element: (0, jsx_runtime_1.jsx)(spots_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) })] })] }));
};
exports.default = index;
//# sourceMappingURL=index.js.map
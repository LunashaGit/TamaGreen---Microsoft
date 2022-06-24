"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Map_1 = __importDefault(require("../components/Mapping/Map"));
const react_redux_1 = require("react-redux");
const react_1 = require("react");
const Home = () => {
    const userData = (0, react_redux_1.useSelector)((state) => state.userReducer);
    const [latitude, setLatitude] = (0, react_1.useState)();
    const [longitude, setLongitude] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        if (Object.keys(userData).length) {
            setLatitude(userData.latitude);
            setLongitude(userData.longitude);
        }
    }, [userData]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "w-screen h-screen" }, { children: (0, jsx_runtime_1.jsx)(Map_1.default, { latitude: latitude, longitude: longitude }) })) }));
};
exports.default = Home;
//# sourceMappingURL=Home.js.map
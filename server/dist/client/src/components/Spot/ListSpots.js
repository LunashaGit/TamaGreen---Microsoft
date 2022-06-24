"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const CssBaseline_1 = __importDefault(require("@mui/material/CssBaseline"));
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const react_redux_1 = require("react-redux");
const ListSpots = () => {
    const spotsData = (0, react_redux_1.useSelector)((state) => state.spotsReducer);
    const spotData = (0, react_redux_1.useSelector)((state) => state.spotReducer);
    console.log(spotData);
    console.log(spotsData);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(Grid_1.default, Object.assign({ container: true, component: "main", sx: { height: "100%" } }, { children: [(0, jsx_runtime_1.jsx)(CssBaseline_1.default, {}), (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: 12, sm: 8, md: 5, component: Paper_1.default, elevation: 6, square: true }, { children: (0, jsx_runtime_1.jsx)(Box_1.default, Object.assign({ sx: {
                            my: 12,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        } }, { children: "Voici la liste des spots" })) }))] })) }));
};
exports.default = ListSpots;
//# sourceMappingURL=ListSpots.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Spot_1 = __importDefault(require("../components/Spot"));
const Spots = () => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "pt-24 h-screen" }, { children: (0, jsx_runtime_1.jsx)(Spot_1.default, { list: false, create: true }) })));
};
exports.default = Spots;
//# sourceMappingURL=spots.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Spacing = ({ children, color }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: `relative max-w-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-2xl w-full mx-auto px-3 py-12 sm:px-0 md:py-16 lg:py-20 2xl:py-24 ${color ? color : "bg-transparent"}` }, { children: children })));
};
exports.default = Spacing;
//# sourceMappingURL=Spacing.js.map
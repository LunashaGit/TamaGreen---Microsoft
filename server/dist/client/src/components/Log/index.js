"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Log = (props) => {
    const [signUpModal, setSignUpModal] = (0, react_1.useState)(props.signup);
    const [signInModal, setSignInModal] = (0, react_1.useState)(props.signin);
    const handleModals = (e) => {
        if (e.currentTarget.id === "register") {
            setSignInModal(false);
            setSignUpModal(true);
        }
        else if (e.currentTarget.id === "login") {
            setSignInModal(true);
            setSignUpModal(false);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "connection-form" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "form-container" }, { children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", Object.assign({ onClick: handleModals, id: "register", className: signUpModal ? "active-btn" : "" }, { children: "S'inscrire" })), (0, jsx_runtime_1.jsx)("li", Object.assign({ onClick: handleModals, id: "login", className: signInModal ? "active-btn" : "" }, { children: "Se connecter" }))] }) })) })));
};
exports.default = Log;
//# sourceMappingURL=index.js.map
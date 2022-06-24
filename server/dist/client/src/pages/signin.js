"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Avatar_1 = __importDefault(require("@mui/material/Avatar"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const CssBaseline_1 = __importDefault(require("@mui/material/CssBaseline"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
const Link_1 = __importDefault(require("@mui/material/Link"));
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const LockOutlined_1 = __importDefault(require("@mui/icons-material/LockOutlined"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const material_1 = require("@mui/material");
function Copyright(props) {
    return ((0, jsx_runtime_1.jsxs)(Typography_1.default, Object.assign({ variant: "body2", color: "text.secondary", align: "center" }, props, { children: ["Copyright © ", (0, jsx_runtime_1.jsx)(Link_1.default, Object.assign({ color: "inherit", href: "https://mui.com/" }, { children: "Friend Finder" })), " ", new Date().getFullYear(), "."] })));
}
const theme = (0, styles_1.createTheme)();
function SignInSide() {
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [emailError, setEmailError] = (0, react_1.useState)(false);
    const [passwordError, setPasswordError] = (0, react_1.useState)(false);
    const [remember, setRemember] = (0, react_1.useState)(true);
    localStorage.setItem("remember", JSON.stringify(remember));
    (0, react_1.useEffect)(() => {
        if (localStorage.getItem("email")) {
            setEmail(localStorage.getItem("email"));
        }
        if (localStorage.getItem("remember") === null) {
            setRemember(false);
        }
    }, [email, remember]);
    if (remember === false) {
        localStorage.removeItem("email");
    }
    const handleLogin = (e) => {
        e.preventDefault();
        if (remember) {
            localStorage.setItem("email", email);
        }
        (0, axios_1.default)({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/user/login`,
            withCredentials: true,
            data: {
                email,
                password,
            },
        })
            .then((res) => {
            window.location.href = "/";
        })
            .catch((err) => {
            err.response.data.errors.email
                ? setEmailError(true)
                : setEmailError(false);
            err.response.data.errors.password
                ? setPasswordError(true)
                : setPasswordError(false);
        });
    };
    return ((0, jsx_runtime_1.jsx)(styles_1.ThemeProvider, Object.assign({ theme: theme }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "pt-24 h-screen" }, { children: [emailError && ((0, jsx_runtime_1.jsx)(material_1.Alert, Object.assign({ severity: "error", className: "text-center" }, { children: "Oups ! Your email doesn't exist !" }))), passwordError && ((0, jsx_runtime_1.jsx)(material_1.Alert, Object.assign({ severity: "error", className: "text-center" }, { children: "Oups ! Wrong password !" }))), (0, jsx_runtime_1.jsxs)(Grid_1.default, Object.assign({ container: true, component: "main", sx: { height: "100%" } }, { children: [(0, jsx_runtime_1.jsx)(CssBaseline_1.default, {}), (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: 12, sm: 8, md: 5, component: Paper_1.default, elevation: 6, square: true }, { children: (0, jsx_runtime_1.jsxs)(Box_1.default, Object.assign({ sx: {
                                    my: 12,
                                    mx: 4,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                } }, { children: [(0, jsx_runtime_1.jsx)(Avatar_1.default, Object.assign({ sx: { m: 1, bgcolor: "primary.main" } }, { children: (0, jsx_runtime_1.jsx)(LockOutlined_1.default, {}) })), (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ component: "h1", variant: "h5" }, { children: "Sign in" })), (0, jsx_runtime_1.jsxs)(Box_1.default, Object.assign({ component: "form", noValidate: true, onSubmit: handleLogin, sx: { mt: 1 } }, { children: [(0, jsx_runtime_1.jsx)(TextField_1.default, { margin: "normal", required: true, fullWidth: true, onChange: (e) => setEmail(e.target.value), value: email, id: "email", label: "Email Address", name: "email", autoComplete: "email", autoFocus: true }), (0, jsx_runtime_1.jsx)(TextField_1.default, { margin: "normal", required: true, fullWidth: true, name: "password", label: "Password", type: "password", id: "password", onChange: (e) => setPassword(e.target.value), value: password, autoComplete: "current-password" }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { value: remember, color: "primary", onClick: () => setRemember(!remember), checked: remember }), label: "Remember me" }), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ type: "submit", fullWidth: true, variant: "contained", sx: { mt: 3, mb: 2 } }, { children: "Sign In" })), (0, jsx_runtime_1.jsxs)(Grid_1.default, Object.assign({ container: true }, { children: [(0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: true }, { children: (0, jsx_runtime_1.jsx)(Link_1.default, Object.assign({ href: "#", variant: "body2" }, { children: "Forgot password?" })) })), (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true }, { children: (0, jsx_runtime_1.jsx)(Link_1.default, Object.assign({ href: "/signup", variant: "body2" }, { children: "Don't have an account? Sign Up" })) }))] })), (0, jsx_runtime_1.jsx)(Copyright, { sx: { mt: 5 } })] }))] })) })), (0, jsx_runtime_1.jsx)(Grid_1.default, { item: true, xs: false, sm: 4, md: 7, sx: {
                                backgroundImage: "url(https://source.unsplash.com/random)",
                                backgroundRepeat: "no-repeat",
                                backgroundColor: (t) => t.palette.mode === "light"
                                    ? t.palette.grey[50]
                                    : t.palette.grey[900],
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            } })] }))] })) })));
}
exports.default = SignInSide;
//# sourceMappingURL=signin.js.map
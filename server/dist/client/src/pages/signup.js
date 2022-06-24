"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const LockOutlined_1 = __importDefault(require("@mui/icons-material/LockOutlined"));
const styles_1 = require("@mui/material/styles");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
function Copyright(props) {
    return ((0, jsx_runtime_1.jsxs)(material_1.Typography, Object.assign({ variant: "body2", color: "text.secondary", align: "center" }, props, { children: ["Copyright © ", (0, jsx_runtime_1.jsx)(material_1.Link, Object.assign({ color: "inherit", href: "https://mui.com/" }, { children: "Friend Finder" })), " ", new Date().getFullYear(), "."] })));
}
const theme = (0, styles_1.createTheme)();
function SignUpSide() {
    const [pseudo, setPseudo] = (0, react_1.useState)("");
    const [firstName, setFirstName] = (0, react_1.useState)("");
    const [lastName, setLastName] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [street, setStreet] = (0, react_1.useState)("");
    const [num, setNum] = (0, react_1.useState)("");
    const [postal, setPostal] = (0, react_1.useState)("");
    const [city, setCity] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [controlPassword, setControlPassword] = (0, react_1.useState)("");
    const [pseudoError, setPseudoError] = (0, react_1.useState)(false);
    const [emailError, setEmailError] = (0, react_1.useState)(false);
    const [passwordError, setPasswordError] = (0, react_1.useState)(false);
    const [localError, setLocalError] = (0, react_1.useState)(false);
    const [controlError, setControlError] = (0, react_1.useState)(false);
    const [termError, setTermError] = (0, react_1.useState)(false);
    let adresse = `${num} ${street}, ${city} ${postal}`;
    console.log(adresse);
    const params = {
        access_key: process.env.REACT_APP_API_POSITIONSTACK_TOKEN,
        query: { adresse },
        country: "BE",
    };
    const handleRegister = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const terms = document.getElementById("terms");
        if (password !== controlPassword || !terms.checked) {
            if (password !== controlPassword) {
                setControlError(true);
            }
            if (!terms.checked) {
                setTermError(true);
            }
        }
        else {
            yield axios_1.default
                .get("http://api.positionstack.com/v1/forward", { params })
                .then((response) => {
                // console.log(
                //   `Données reçues : Latitude =${response.data.data[0].latitude} & Longitude =${response.data.data[0].longitude}`
                // );
                (0, axios_1.default)({
                    method: "post",
                    url: `${process.env.REACT_APP_API_URL}api/user/register`,
                    data: {
                        pseudo,
                        firstName,
                        lastName,
                        adresse,
                        latitude: response.data.data[0].latitude,
                        longitude: response.data.data[0].longitude,
                        email,
                        password,
                    },
                })
                    .then((res) => {
                    window.location.href = "/signin";
                })
                    .catch((err) => {
                    err.response.data.errors.pseudo
                        ? setPseudoError(true)
                        : setPseudoError(false);
                    err.response.data.errors.email
                        ? setEmailError(true)
                        : setEmailError(false);
                    err.response.data.errors.password
                        ? setPasswordError(true)
                        : setPasswordError(false);
                });
            })
                .catch((error) => {
                setLocalError(true);
                console.log(error);
            });
        }
    });
    return ((0, jsx_runtime_1.jsx)(styles_1.ThemeProvider, Object.assign({ theme: theme }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "pt-24 h-screen" }, { children: [pseudoError && ((0, jsx_runtime_1.jsx)(material_1.Alert, Object.assign({ severity: "error", className: "text-center" }, { children: "Oups ! Your pseudo exist already !" }))), passwordError && ((0, jsx_runtime_1.jsx)(material_1.Alert, Object.assign({ severity: "error", className: "text-center" }, { children: "Oups ! Wrong password !" }))), controlError && ((0, jsx_runtime_1.jsx)(material_1.Alert, Object.assign({ severity: "error", className: "text-center" }, { children: "Oups ! Yours password aren't the same !" }))), emailError && ((0, jsx_runtime_1.jsx)(material_1.Alert, Object.assign({ severity: "error", className: "text-center" }, { children: "Oups ! Your email exist already !" }))), termError && ((0, jsx_runtime_1.jsx)(material_1.Alert, Object.assign({ severity: "error", className: "text-center" }, { children: "Please, accept the terms !" }))), localError && ((0, jsx_runtime_1.jsx)(material_1.Alert, Object.assign({ severity: "error", className: "text-center" }, { children: "Oups ! We have a problem to you localise !" }))), (0, jsx_runtime_1.jsxs)(material_1.Grid, Object.assign({ container: true, component: "main", sx: { height: "100%" } }, { children: [(0, jsx_runtime_1.jsx)(material_1.CssBaseline, {}), (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 12, sm: 8, md: 5, component: material_1.Paper, elevation: 6, square: true }, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ sx: {
                                    my: 12,
                                    mx: 4,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                } }, { children: [(0, jsx_runtime_1.jsx)(material_1.Avatar, Object.assign({ sx: { m: 1, bgcolor: "primary.main" } }, { children: (0, jsx_runtime_1.jsx)(LockOutlined_1.default, {}) })), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ component: "h1", variant: "h5" }, { children: "Register" })), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ component: "form", noValidate: true, onSubmit: handleRegister, sx: { mt: 1 } }, { children: [(0, jsx_runtime_1.jsxs)(material_1.Grid, Object.assign({ container: true, spacing: 1 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 12 }, { children: (0, jsx_runtime_1.jsx)(material_1.TextField, { margin: "normal", required: true, fullWidth: true, id: "pseudo", label: "Pseudo", name: "pseudo", autoComplete: "pseudo", autoFocus: true, onChange: (e) => setPseudo(e.target.value), value: pseudo }) })), (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 12, sm: 6 }, { children: (0, jsx_runtime_1.jsx)(material_1.TextField, { margin: "normal", fullWidth: true, id: "firstName", label: "FirstName", name: "firstName", autoComplete: "firstName", onChange: (e) => setFirstName(e.target.value), value: firstName }) })), (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 12, sm: 6 }, { children: (0, jsx_runtime_1.jsx)(material_1.TextField, { margin: "normal", fullWidth: true, id: "lastName", label: "LastName", name: "lastName", autoComplete: "lastName", onChange: (e) => setLastName(e.target.value), value: lastName }) })), (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 12, sm: 9 }, { children: (0, jsx_runtime_1.jsx)(material_1.TextField, { margin: "normal", fullWidth: true, required: true, id: "street", label: "Street", name: "street", autoComplete: "street", onChange: (e) => setStreet(e.target.value), value: street }) })), (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 5, sm: 3 }, { children: (0, jsx_runtime_1.jsx)(material_1.TextField, { margin: "normal", fullWidth: true, required: true, id: "num", label: "N\u00B0", name: "num", autoComplete: "num", onChange: (e) => setNum(e.target.value), value: num }) })), (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 7, sm: 4 }, { children: (0, jsx_runtime_1.jsx)(material_1.TextField, { margin: "normal", fullWidth: true, required: true, id: "postal", label: "Postal code", name: "postal", autoComplete: "postal", onChange: (e) => setPostal(e.target.value), value: postal }) })), (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 12, sm: 8 }, { children: (0, jsx_runtime_1.jsx)(material_1.TextField, { margin: "normal", fullWidth: true, required: true, id: "city", label: "City", name: "city", autoComplete: "city", onChange: (e) => setCity(e.target.value), value: city }) })), (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 12 }, { children: (0, jsx_runtime_1.jsx)(material_1.TextField, { margin: "normal", required: true, fullWidth: true, id: "email", label: "Email Address", name: "email", type: "email", autoComplete: "email", onChange: (e) => setEmail(e.target.value), value: email }) })), (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 12, sm: 6 }, { children: (0, jsx_runtime_1.jsx)(material_1.TextField, { margin: "normal", required: true, fullWidth: true, name: "password", label: "Password", type: "password", id: "password", autoComplete: "current-password", onChange: (e) => setPassword(e.target.value), value: password }) })), (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 12, sm: 6 }, { children: (0, jsx_runtime_1.jsx)(material_1.TextField, { margin: "normal", required: true, fullWidth: true, name: "passwordControl", label: "Password Control", type: "password", id: "passwordControl", onChange: (e) => setControlPassword(e.target.value), value: controlPassword }) })), (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 12 }, { children: (0, jsx_runtime_1.jsx)(material_1.FormControlLabel, { control: (0, jsx_runtime_1.jsx)(material_1.Checkbox, { value: "remember", color: "primary", id: "terms" }), label: "Accept the GCD" }) }))] })), (0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ type: "submit", fullWidth: true, variant: "contained", sx: { mt: 3, mb: 2 } }, { children: "Sign Up" })), (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ container: true }, { children: (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true }, { children: (0, jsx_runtime_1.jsx)(material_1.Link, Object.assign({ href: "/signin", variant: "body2" }, { children: "Already have an account? Sign In" })) })) })), (0, jsx_runtime_1.jsx)(Copyright, { sx: { mt: 5 } })] }))] })) })), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: false, sm: 4, md: 7, sx: {
                                backgroundImage: "url(https://source.unsplash.com/random)",
                                backgroundRepeat: "no-repeat",
                                backgroundColor: (t) => t.palette.mode === "light"
                                    ? t.palette.grey[50]
                                    : t.palette.grey[900],
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            } })] }))] })) })));
}
exports.default = SignUpSide;
//# sourceMappingURL=signup.js.map
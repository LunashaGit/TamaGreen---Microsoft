"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpots = exports.GET_SPOTS = void 0;
const axios_1 = __importDefault(require("axios"));
exports.GET_SPOTS = "GET_SPOTS";
const getSpots = () => {
    return (dispatch) => {
        return axios_1.default
            .get(`${process.env.REACT_APP_API_URL}api/spot`)
            .then((res) => {
            dispatch({ type: exports.GET_SPOTS, payload: res.data });
        })
            .catch((err) => console.log(err));
    };
};
exports.getSpots = getSpots;
//# sourceMappingURL=spots.actions.js.map
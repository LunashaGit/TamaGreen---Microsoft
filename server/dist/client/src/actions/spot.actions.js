"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.followSpot = exports.updateBio = exports.uploadPicture = exports.getSpot = exports.UNFOLLOW_SPOT = exports.FOLLOW_SPOT = exports.UPDATE_BIO = exports.UPLOAD_PICTURE = exports.GET_SPOT = void 0;
const axios_1 = __importDefault(require("axios"));
exports.GET_SPOT = "GET_SPOT";
exports.UPLOAD_PICTURE = "UPLOAD_PICTURE";
exports.UPDATE_BIO = "UPDATE_BIO";
exports.FOLLOW_SPOT = "FOLLOW_SPOT";
exports.UNFOLLOW_SPOT = "UNFOLLOW_SPOT";
const getSpot = (uid) => {
    return (dispatch) => {
        return axios_1.default
            .get(`${process.env.REACT_APP_API_URL}api/spot/${uid}`)
            .then((res) => {
            dispatch({ type: exports.GET_SPOT, payload: res.data });
        })
            .catch((err) => console.log(err));
    };
};
exports.getSpot = getSpot;
const uploadPicture = (data, id) => {
    return (dispatch) => {
        return axios_1.default
            .post(`${process.env.REACT_APP_API_URL}api/spot/upload`, data)
            .then((res) => {
            return axios_1.default
                .get(`${process.env.REACT_APP_API_URL}api/spot/${id}`)
                .then((res) => {
                dispatch({ type: exports.UPLOAD_PICTURE, payload: res.data.picture });
            })
                .catch((err) => console.log(err));
        })
            .catch((err) => console.log(err));
    };
};
exports.uploadPicture = uploadPicture;
const updateBio = (spotId, bio) => {
    return (dispatch) => {
        return axios_1.default
            .put(`${process.env.REACT_APP_API_URL}api/spot/${spotId}`, { bio })
            .then((res) => {
            dispatch({
                type: exports.UPDATE_BIO,
                payload: bio,
            });
        })
            .catch((err) => console.log(err));
    };
};
exports.updateBio = updateBio;
const followSpot = (followerId, idToFollow) => {
    return (dispatch) => {
        return axios_1.default
            .patch(`${process.env.REACT_APP_API_URL}api/spot/follow/${followerId}`, {
            idToFollow,
        })
            .then((res) => {
            dispatch({
                type: exports.FOLLOW_SPOT,
                payload: idToFollow,
            });
        })
            .catch((err) => console.log(err));
    };
};
exports.followSpot = followSpot;
//# sourceMappingURL=spot.actions.js.map
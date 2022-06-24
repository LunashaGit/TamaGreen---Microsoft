"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFriend = exports.acceptFriend = exports.updateBio = exports.uploadPicture = exports.getUser = exports.DELETE_FRIEND = exports.ACCEPT_FRIEND = exports.UPDATE_BIO = exports.UPLOAD_PICTURE = exports.GET_USER = void 0;
const axios_1 = __importDefault(require("axios"));
exports.GET_USER = "GET_USER";
exports.UPLOAD_PICTURE = "UPLOAD_PICTURE";
exports.UPDATE_BIO = "UPDATE_BIO";
exports.ACCEPT_FRIEND = "ACCEPT_FRIEND";
exports.DELETE_FRIEND = "DELETE_FRIEND";
const getUser = (uid) => {
    return (dispatch) => {
        return axios_1.default
            .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
            .then((res) => {
            dispatch({ type: exports.GET_USER, payload: res.data });
        })
            .catch((err) => console.log(err));
    };
};
exports.getUser = getUser;
const uploadPicture = (data, id) => {
    return (dispatch) => {
        return axios_1.default
            .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
            .then((res) => {
            return axios_1.default
                .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
                .then((res) => {
                dispatch({ type: exports.UPLOAD_PICTURE, payload: res.data.picture });
            })
                .catch((err) => console.log(err));
        })
            .catch((err) => console.log(err));
    };
};
exports.uploadPicture = uploadPicture;
const updateBio = (userId, bio) => {
    return (dispatch) => {
        return axios_1.default
            .put(`${process.env.REACT_APP_API_URL}api/user/${userId}`, { bio })
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
const acceptFriend = (idToAccept, userId) => {
    return (dispatch) => {
        return axios_1.default
            .patch(`${process.env.REACT_APP_API_URL}api/user/accept-friend/${userId}/${idToAccept}`)
            .then((res) => {
            dispatch({
                type: exports.ACCEPT_FRIEND,
                payload: idToAccept,
            });
        })
            .catch((err) => console.log(err));
    };
};
exports.acceptFriend = acceptFriend;
const deleteFriend = (idToDelete, userId) => {
    return (dispatch) => {
        return axios_1.default
            .patch(`${process.env.REACT_APP_API_URL}api/user/delete-request-friend/${idToDelete}/${userId}`)
            .then((res) => {
            dispatch({
                type: exports.DELETE_FRIEND,
                payload: idToDelete,
            });
        })
            .catch((err) => console.log(err));
    };
};
exports.deleteFriend = deleteFriend;
//# sourceMappingURL=user.actions.js.map
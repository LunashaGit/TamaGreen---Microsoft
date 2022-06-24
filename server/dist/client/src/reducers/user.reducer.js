"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_actions_1 = require("../actions/user.actions");
const initialState = {};
function userReducer(state = initialState, action) {
    switch (action.type) {
        case user_actions_1.GET_USER:
            return action.payload;
        case user_actions_1.UPLOAD_PICTURE:
            return Object.assign(Object.assign({}, state), { picture: action.payload });
        case user_actions_1.UPDATE_BIO:
            return Object.assign(Object.assign({}, state), { bio: action.payload });
        case user_actions_1.ACCEPT_FRIEND:
            return Object.assign(Object.assign({}, state), { friends: action.payload });
        case user_actions_1.DELETE_FRIEND:
            if (state.friendRequestReceived) {
                return Object.assign(Object.assign({}, state), { friendRequestReceived: state.friendRequestReceived.filter((id) => id !== action.payload) });
            }
            else {
                return state;
            }
        default:
            return state;
    }
}
exports.default = userReducer;
//# sourceMappingURL=user.reducer.js.map
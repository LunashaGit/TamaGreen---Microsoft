"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spots_actions_1 = require("../actions/spots.actions");
const initialState = {};
function spotsReducer(state = initialState, action) {
    switch (action.type) {
        case spots_actions_1.GET_SPOTS:
            return action.payload;
        default:
            return state;
    }
}
exports.default = spotsReducer;
//# sourceMappingURL=spots.reducer.js.map
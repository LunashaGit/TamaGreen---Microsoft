"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spot_actions_1 = require("../actions/spot.actions");
const initialState = {};
function spotReducer(state = initialState, action) {
    switch (action.type) {
        case spot_actions_1.GET_SPOT:
            return action.payload;
        default:
            return state;
    }
}
exports.default = spotReducer;
//# sourceMappingURL=spot.reducer.js.map
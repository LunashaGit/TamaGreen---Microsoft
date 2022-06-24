"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CreateSpot_1 = __importDefault(require("./CreateSpot"));
const ListSpots_1 = __importDefault(require("./ListSpots"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Stack_1 = __importDefault(require("@mui/material/Stack"));
const material_1 = require("@mui/material");
const Spot = (props) => {
    const [listSpotsModal, setListSpotsModal] = (0, react_1.useState)(props.list);
    const [createSpotModal, setCreateSpotModal] = (0, react_1.useState)(props.create);
    const handleModals = (e) => {
        if (e.currentTarget.id === "create") {
            setListSpotsModal(false);
            setCreateSpotModal(true);
        }
        else if (e.currentTarget.id === "list") {
            setListSpotsModal(true);
            setCreateSpotModal(false);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(material_1.Grid, { children: [(0, jsx_runtime_1.jsxs)(Stack_1.default, Object.assign({ spacing: 2, direction: "row", justifyContent: "center" }, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ onClick: handleModals, id: "create", className: createSpotModal ? "active-btn" : "" }, { children: "Cr\u00E9er un spot" })), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ onClick: handleModals, id: "list", className: listSpotsModal ? "active-btn" : "" }, { children: "Voir ses spots" }))] })), listSpotsModal && (0, jsx_runtime_1.jsx)(ListSpots_1.default, {}), createSpotModal && (0, jsx_runtime_1.jsx)(CreateSpot_1.default, {})] }));
};
exports.default = Spot;
//# sourceMappingURL=index.js.map
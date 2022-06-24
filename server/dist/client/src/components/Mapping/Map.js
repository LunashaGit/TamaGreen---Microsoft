"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_leaflet_1 = require("react-leaflet");
const leaflet_1 = __importDefault(require("leaflet"));
const react_redux_1 = require("react-redux");
const HobbiesList_1 = require("./../HobbiesList");
const Map = ({ latitude, longitude }) => {
    const hobbies = (0, react_redux_1.useSelector)((state) => state.spotsReducer);
    let meIcon = leaflet_1.default.icon({
        iconUrl: "../../img/street-view.png",
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });
    const ChangeView = ({ latitude, longitude, zoom }) => {
        const map = (0, react_leaflet_1.useMap)();
        map.setView([latitude, longitude], zoom);
        return null;
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(react_leaflet_1.MapContainer, Object.assign({ center: [latitude, longitude], zoom: 16, scrollWheelZoom: true }, { children: [(0, jsx_runtime_1.jsx)(ChangeView, { latitude: latitude, longitude: longitude, zoom: 16 }), (0, jsx_runtime_1.jsx)(react_leaflet_1.TileLayer, { attribution: '\u00A9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }), (0, jsx_runtime_1.jsx)(react_leaflet_1.Marker, Object.assign({ position: [latitude, longitude], icon: meIcon }, { children: (0, jsx_runtime_1.jsx)(react_leaflet_1.Popup, { children: "Ici c'est ton domicile !" }) })), Object.keys(hobbies).length && hobbies.map((hobby) => {
                    const icon = HobbiesList_1.passions.find(hobb => hobb.name === hobby.hobbies[0]);
                    let hobIcon = leaflet_1.default.icon({
                        iconUrl: `../../img/${icon.icon}`,
                        iconSize: [50, 50],
                        iconAnchor: [25, 50],
                        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
                    });
                    return ((0, jsx_runtime_1.jsx)(react_leaflet_1.Marker, Object.assign({ position: [hobby.latitude, hobby.longitude], icon: hobIcon }, { children: (0, jsx_runtime_1.jsx)(react_leaflet_1.Popup, { children: hobby.hobbies[0] }) }), hobby._id));
                })] })) }));
};
Map.defaultProps = {
    latitude: 50.632744,
    longitude: 5.586157,
};
exports.default = Map;
//# sourceMappingURL=Map.js.map
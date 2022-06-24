import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";

import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import { getUsers } from "./redux/actions/users.actions";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
store.dispatch(getUsers());

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

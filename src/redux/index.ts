import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducer/rootReducer";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export default store;




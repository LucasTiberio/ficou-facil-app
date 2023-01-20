import { createStore } from "redux";

import reducers from "./states";

const store = createStore(reducers)
export default store;

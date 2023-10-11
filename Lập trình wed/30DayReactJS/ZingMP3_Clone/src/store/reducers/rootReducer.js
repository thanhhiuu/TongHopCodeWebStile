import appReducer from "./appReducer";
import { combineReducers } from "redux";
// import { recentReducer } from "./index";

const rootReducer = combineReducers({
  app: appReducer,
  // recent: recentReducer,
});
export default rootReducer;

import { combineReducers } from "redux";
import user from "./user/reducer";
import post from "./posts/reducer";

const rootReducer = combineReducers({
  user,
  post,
});

export default rootReducer;

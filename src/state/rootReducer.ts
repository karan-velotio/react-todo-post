import { combineReducers } from "redux";
import user from "src/state/user/reducer";
import post from "src/state/posts/reducer";
import todo from "src/state/todos/reducer";

const rootReducer = combineReducers({
  user,
  post,
  todo,
});

export default rootReducer;

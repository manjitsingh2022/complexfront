import { combineReducers } from "redux";
import { users } from "./users.reducer";
import { authentication } from "./authentication.reducer";
const rootReducer = combineReducers({
  users,
  authentication,
});

export default rootReducer;

import { combineReducers } from "redux";
import departmentReducer from "./departmentReducer";
import projectGroupReducer from "./projectGroupReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import iconReducer from "./iconReducer";

const rootReducer = combineReducers({
  departmentReducer,
  projectGroupReducer,
  userReducer,
  authReducer,
  iconReducer
});
export default rootReducer;

import { combineReducers } from "redux";
import deliveryReducer from "./deliveryReducer";

const rootReducer = combineReducers({
  delivery: deliveryReducer,
});

export default rootReducer;

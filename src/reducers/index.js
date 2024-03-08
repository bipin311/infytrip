import { combineReducers } from "redux";

import { userReducer } from "./userReducer";
import { hotelReducer } from "./hotelReducer";
import { searchReducer } from "./searchReducer";

const reducers = combineReducers({
  user: userReducer,
  hotel: hotelReducer,
  search: searchReducer,
});

export default reducers;

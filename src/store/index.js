import { createStore } from "redux";
import reducers from "../reducers";

const initialState = {
  user: null,
  search: {
    location: "",
    id: "",
    filterData: {
      areaData: [],
      ratingData: {
        oneStar: 0,
        twoStar: 0,
        threeStar: 0,
        fourStar: 0,
        fiveStar: 0,
      },
      propertyTypeData: [],
      facilitiesData: [],
    },
  },
};

export const store = createStore(reducers, initialState);

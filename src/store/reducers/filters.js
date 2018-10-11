import {
  SET_FILTER_NAME,
  SET_FILTER_CREATOR,
  SET_FILTER_DESCRIPTION
} from "../actionTypes";

const filtersDefaultState = { name: "", description: "", creator: "" };

export default (state = filtersDefaultState, action) => {
  switch (action.type) {
    case SET_FILTER_NAME:
      const name = action.name;
      return { ...state, name };
    case SET_FILTER_DESCRIPTION:
      const description = action.description;
      return { ...state, description };
    case SET_FILTER_CREATOR:
      const creator = action.creator;
      return { ...state, creator };
    default:
      return state;
  }
};

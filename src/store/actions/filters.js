import {
  SET_FILTER_NAME,
  SET_FILTER_CREATOR,
  SET_FILTER_DESCRIPTION
} from "../actionTypes";

export const setFilterName = name => ({
  type: SET_FILTER_NAME,
  name
});

export const setFilterDescription = description => ({
  type: SET_FILTER_DESCRIPTION,
  description
});

export const setFilterCreator = creator => ({
  type: SET_FILTER_CREATOR,
  creator
});

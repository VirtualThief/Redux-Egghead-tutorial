import { CHANGE_FILTER } from "../actions/filter";

const visibilityFilter = (state = "DISPLAY_ALL", action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;

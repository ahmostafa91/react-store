import * as types from '../actions/actionTypes';

export default function filtersReducer(
  filters = [],
  action,
) {
  switch (action.type) {
    case types.SET_FILTER: {
      let filterFound = false;
      let newFilters = filters.map(filter => {
        if (filter.type === action.filter.type) {
          filterFound = true;
          return action.filter;
        }
        return filter;
      });

      return filterFound ? newFilters : [...filters, action.filter];
    }
    case types.REMOVE_FILTER: {
      return filters.filter(obj => obj.type !== action.filter.type)
    }
    default:
      return filters;
  }
}
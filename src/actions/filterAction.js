import * as types from './actionTypes';

export const setFilter = (filter) => {
    return {
      type: types.SET_FILTER,
      filter
    }
  }

  export const removeFilter = (filter) => {
    return {
      type: types.REMOVE_FILTER,
      filter
    }
  }
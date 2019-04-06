import * as types from './actionType';

export const getColor = (val) => {
    return {
      type: types.COLOR_FILTER_USED,
      payload: val
    }
  }
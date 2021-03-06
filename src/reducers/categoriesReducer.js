import * as types from '../actions/actionTypes';

export default function categoriesReducer(
    state = [],
    action,
) {
    switch (action.type) {
        case types.FETCH_ALL_CATEGORIES_SUCCEEDED:
            return action.payload
        default:
            return state;
    }
}
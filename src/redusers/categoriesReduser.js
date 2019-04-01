import * as types from '../actions/actionType';

export default function categoriesReducer(
    state = null,
    action,
) {
    switch (action.type) {
        case types.FETCH_ALL_CATEGORIES:
            return action.test;
        default:
            return state;
    }
}
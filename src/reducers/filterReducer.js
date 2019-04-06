import * as types from '../actions/actionType';

export default function filterReducer(
    state = [],
    action,
) {
    switch (action.type) {
        case types.CATEGORY_CLICKED:
            return action.payload;
        case types.COLOR_FILTER_USED:
            return action.payload;
        default:
            return state;
    }
}
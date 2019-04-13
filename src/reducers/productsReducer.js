import * as types from '../actions/actionTypes';

export default function productsReducer(
    state = [],
    action,
) {
    switch (action.type) {
        case types.FETCH_ALL_PRODUCTS_SUCCEEDED:
            return action.payload
        default:
            return state;
    }
}
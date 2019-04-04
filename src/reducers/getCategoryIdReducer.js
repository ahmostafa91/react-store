import * as types from '../actions/actionType';

export default function getIdReducer(
    state = [],
    action,
) {
    switch (action.type) {
        case types.CATEGORY_CLICKED:
            return action.payload
        default:
            return state;
    }
}
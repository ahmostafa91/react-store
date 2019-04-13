import * as types from './actionType';

export const addFilter = () => {
    return [
        {
            type: types.SET_FILTER,
            payload: {
                filterType: 'colorFilter',
                filterValue: []
            }
        },
        {
            type: types.SET_FILTER,
            payload: {
                filterType: 'categoryFilter',
                filterValue: null
            }
        },
    ];
}
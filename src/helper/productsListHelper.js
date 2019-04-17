import * as filterTypes from '../constants/filtersTypes';

const FILTERS = {
    [filterTypes.COLOR_FILTER]: (product, colorVal) => {
            return product.color === colorVal;
    },
    [filterTypes.RATTING_FILTER]: (product, rateVal) => {
        return product.rating === rateVal;
    },
    [filterTypes.CATEGORY_FILTER]: (product, categoryVal) => {
        return product.categoryId === categoryVal;
    },
    [filterTypes.RANGE_FILTER]: (product, rangeVal) => {
        if(product.price >= rangeVal[0] && product.price <= rangeVal[1]){
            return true;
        }
    }
}

export const isMatchingFiltersProduct = (product, filters) => {
    for(let i = 0; i < filters.length; i ++) {
        const match = FILTERS[filters[i].type];
        let isMatching = match(product, filters[i].value);

        if(!isMatching)
            return false;
    }

    return true;
}

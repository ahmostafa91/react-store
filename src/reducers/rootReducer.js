import { combineReducers } from 'redux';
import categories from './categoriesReducer';
import products from './productsReducer';
import filters from './filterReducer';

const rootReducer = combineReducers({
    categories,
    products,
    filters
});

export default rootReducer;
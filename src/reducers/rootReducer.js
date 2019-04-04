import { combineReducers } from 'redux';
import categories from './categoriesReducer';
import products from './productsReducer';
import getId from './getCategoryIdReducer';

const rootReducer = combineReducers({
    categories,
    products,
    getId
});

export default rootReducer;
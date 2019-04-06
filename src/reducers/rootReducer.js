import { combineReducers } from 'redux';
import categories from './categoriesReducer';
import products from './productsReducer';
/*import getId from './getCategoryIdReducer';
import colorF from './colorFilterReducer';*/
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    categories,
    products,
    filterReducer
    /*getId,
    colorF*/
});

export default rootReducer;
import * as types from './actionType';
import Products from '../api/ProductsApi';

export const getAllProds = () => {
  return (dispatch) => {
    Products.getAllProducts().then((data) => {
      dispatch({
        type: types.FETCH_ALL_PRODUCTS_SUCCEEDED,
        payload: data
      })
    })
  }
};
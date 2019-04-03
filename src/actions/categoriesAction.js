import * as types from './actionType';
import Categories from './../api/CategoriesApi';

export const getAllCateg = () => {
  return (dispatch) => {
    Categories.getAllCategories().then((data) => {
      dispatch({
        type: types.FETCH_ALL_CATEGORIES_SUCCEEDED,
        payload: data
      })
    })
  }
};
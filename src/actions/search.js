import { SEARCH } from './action-types';
import axios from 'axios';

export const handleSearch = (query) => {
  return (dispatch) => {
    return axios.get(`https://www.mec.ca/api/v1/products/search?keywords=tent`).then((response) => {
      dispatch(setSearchedProducts(response.data.products));
    }).catch((error) => {
      dispatch(setSearchedProducts([]));
    });
  }
}

export const setSearchedProducts = (products) => {
  return {
    type: SEARCH.GET_PRODUCTS,
    products
  }
};
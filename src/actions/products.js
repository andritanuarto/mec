import axios from 'axios';
import config from '../config';
import { PRODUCTS } from './action-types';

export const handleSearch = (keyword) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    return axios.get(`${config.BASE_URL}/products/search?keywords=${keyword}`).then((response) => {
      if (!response.total_product_count) {
        dispatch(setSearchedProducts(response.data.products));
        dispatch(setLoading(false));
      } else {
        dispatch(setSearchedProducts([]));
        dispatch(setLoading(false));
      }
    }).catch((error) => {
      console.log(error);
      dispatch(setSearchedProducts([]));
      dispatch(setLoading(false));
    });
  }
}

const setSearchedProducts = (products) => {
  return {
    type: PRODUCTS.GET_PRODUCTS,
    products
  }
};

const setLoading = (loading) => {
  return {
    type: PRODUCTS.LOADING,
    loading
  }
}


import { PRODUCTS } from '../actions/action-types';

const initialState = {
  items: [],
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case PRODUCTS.GET_PRODUCTS: {
      return Object.assign({}, state, {
        items: action.products
      });
    }

    case PRODUCTS.LOADING: {
      return Object.assign({}, state, {
        loading: action.loading
      });
    }

    default: {
      return state;
    }
  }
}
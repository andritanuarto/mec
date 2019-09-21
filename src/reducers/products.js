import { SEARCH } from '../actions/action-types';

const initialState = {
  items: [],
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH.GET_PRODUCTS: {
      return Object.assign({}, state, {
        products: action.products
      });
    }

    case SEARCH.LOADING: {
      return Object.assign({}, state, {
        loading: action.loading
      });
    }

    default: {
      return state;
    }
  }
}
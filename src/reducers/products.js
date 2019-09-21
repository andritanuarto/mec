import { SEARCH } from '../actions/action-types';

const initialState = {
  products: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH.GET_PRODUCTS: {
      return Object.assign({}, state, {
        products: action.products
      });
    }

    default: {
      return state;
    }
  }
}
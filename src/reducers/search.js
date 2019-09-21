import { SEARCH } from '../actions/action-types';

const initialState = {
  keyword: "nothing"
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH.SET_KEYWORD: {
      return Object.assign({}, state, {
        keyword: action.keyword
      });
    }

    default: {
      return state;
    }
  }
}
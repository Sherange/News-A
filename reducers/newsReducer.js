import * as Types from '../actions/actionTypes';

const initialState = {
  headlines: [],
  isFetching: false,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case Types.FETCHED:
      return {
        ...state,
        isFetching: false,
      };
    case Types.HEADLINES:
      return {
        ...state,
        headlines: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;

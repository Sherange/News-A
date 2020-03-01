import * as Types from '../actions/actionTypes';

const initialState = {
  authUser: null,
  isFetching: false,
};

const userReducer = (state = initialState, action) => {
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
    case Types.AUTH_USER:
      return {
        ...state,
        authUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

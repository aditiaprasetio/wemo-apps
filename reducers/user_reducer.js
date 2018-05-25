import {
  LOGIN_USER,
  REGISTER_USER
} from '../actions/types';

const INITIAL_STATE = {
  isLoggedIn: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { isLoggedIn: action.isLoggedIn, data: action.data };
    case REGISTER_USER:
      return { isLoggedIn: action.isLoggedIn, data: action.data };
    default:
      return state;
  }
};

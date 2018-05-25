import { LOGIN_USER } from "../actions/types";

const initialState = { isLoggedIn: false };

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, isLoggedIn: true };

    // case Logout:
    //   return { ...state, isLoggedIn: false };

    // case RegisterSuccess:
    //   return { ...state, isLoggedIn: true };

    default:
      return state;
  }
};

export default loginReducer;
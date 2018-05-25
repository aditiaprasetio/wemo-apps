import AppNavigator from '../navigation/navigationStack';
// import {
//   createNavigationReducer
// } from 'react-navigation-redux-helpers';
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('login'));

export const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};


// export const navReducer = createNavigationReducer(AppNavigator);
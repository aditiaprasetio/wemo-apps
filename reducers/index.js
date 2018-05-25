import { combineReducers } from 'redux';
import user from './user_reducer';
import loginReducer from './loginReducer';
import {navReducer} from './navigationReducer';

export default combineReducers({
  user, loginReducer, nav:navReducer
});
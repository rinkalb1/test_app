import userReducer from './userdataReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userReducer: userReducer,

});

export default rootReducer;
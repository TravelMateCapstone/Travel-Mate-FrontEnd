import { combineReducers } from 'redux';
import couterReducer from './couterReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    couter : couterReducer,
    auth: authReducer,

});

export default rootReducer;

import { combineReducers } from 'redux';
import couterReducer from './couterReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
    couter : couterReducer,
    auth: authReducer,
    modal: modalReducer,
});

export default rootReducer;

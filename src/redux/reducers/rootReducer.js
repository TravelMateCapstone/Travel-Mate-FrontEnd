import { combineReducers } from 'redux';
import couterReducer from './couterReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';
import groupReducer from './groupReducer';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
    couter: couterReducer,
    auth: authReducer,
    modal: modalReducer,
    group: groupReducer,
    event: eventReducer
});

export default rootReducer;

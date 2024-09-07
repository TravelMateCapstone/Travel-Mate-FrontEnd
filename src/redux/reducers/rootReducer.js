import { combineReducers } from 'redux';
import couterReducer from './couterReducer';

const rootReducer = combineReducers({
    couter : couterReducer,
});

export default rootReducer;

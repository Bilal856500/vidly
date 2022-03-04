import {combineReducers} from 'redux';
import customers from './customerReducer';
import apiError from './errorReducer';


const CombineReducers = combineReducers({
    customers ,
    apiError
});

export default CombineReducers;
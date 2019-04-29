import { combineReducers } from 'redux';
import page from './page'
import data from './data'


const combinedReducer = combineReducers({
    page,
    data
});

export default combinedReducer


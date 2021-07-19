import  { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './AuthReducer';
import thunkMiddleware from 'redux-thunk';

export const rootReducer = combineReducers({
    auth: authReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
import  { createStore, combineReducers, applyMiddleware } from 'redux';
import loginPageReducer from './loginPageReducer';
import thunkMiddleware from 'redux-thunk';

export const rootReducer = combineReducers({
    loginPage: loginPageReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
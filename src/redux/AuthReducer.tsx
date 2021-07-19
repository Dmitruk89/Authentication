import {loginState, LoginActionTypes} from '../interface/login.interface';
import {AuthenticateUser, GetUserData} from '../api';
import { userData} from '../interface/auth.interface';

const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_USER_DATA = "SET_USER_DATA";
const LOG_OUT_USER = "LOG_OUT_USER";

let user: { name: string; email: string; id: number; } = localStorage.loggedUser ? JSON.parse(localStorage.loggedUser) : null;

const defaultState: loginState = {
    isFetching: false,
    user
}

const authReducer = (state: loginState = defaultState, action: any):loginState => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching,
            }
        case SET_USER_DATA:
            return {
                ...state,
                user: action.data
                }
        case LOG_OUT_USER:
            return {
                ...state,
                user: null
                }
        default: return state;
    }
}

export type DispatchType = (args: LoginActionTypes) => LoginActionTypes;

export const getUser = ({ email, password }: userData) => {
    return (dispatch: DispatchType) => {
      dispatch(toggleIsFetching());
      AuthenticateUser({ email, password }).then((data) => {
        localStorage.setItem('accessToken', data.accessToken);
        GetUserData(data.accessToken).then((data) => {
            localStorage.setItem('loggedUser', JSON.stringify(data));
            dispatch(setUserData(data));
            dispatch(toggleIsFetching());
        })
      });
    };
  };

export const logOutHandler = () => {
    return (dispatch: DispatchType) => {
      dispatch(logOutUser());
      delete localStorage.accessToken;
      delete localStorage.loggedUser;
    };
};

export const toggleIsFetching = () => ({ type: TOGGLE_IS_FETCHING });
export const setUserData = (data: object) => ({type: SET_USER_DATA, data});
export const logOutUser = () => ({type: LOG_OUT_USER});

export default authReducer;
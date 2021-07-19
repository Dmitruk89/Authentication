import {toggleIsFetching, setUserData, logOutUser} from '../redux/AuthReducer';
export interface loginState {
    isFetching: boolean;
    user: { name: string; email: string; id: number; } | null;
}

export type ToggleIsFetching = ReturnType<typeof toggleIsFetching>;
export type LogOutUser = ReturnType<typeof logOutUser>;

export type LoginActionTypes =
    | ToggleIsFetching
    | ReturnType<typeof setUserData>
    | LogOutUser
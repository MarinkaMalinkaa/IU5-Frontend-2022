export interface UserState {
    user: any;
    username: string | null;
    loading: boolean;
    error: null | string;    
}

export enum UserActionTypes {
    SET_USERNAME = "SET_USERNAME",
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR",
}
interface FetchUserAction {
    type: UserActionTypes.FETCH_USER;
}
interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS;
    payload: object;
}
interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR;
    payload: string;
}
interface SetUsernameAction {
    type: UserActionTypes.SET_USERNAME;
    payload: string
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction | SetUsernameAction
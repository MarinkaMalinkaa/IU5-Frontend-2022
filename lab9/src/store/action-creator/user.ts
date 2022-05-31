import { Dispatch } from "react"

import { UserAction, UserActionTypes } from "../../types/user"

export const setUser = (username: string) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch ({
            type: UserActionTypes.SET_USERNAME,
            payload: username
        })
    }
}


export const fetchUser = (username: string | null) => {
    return function (dispatch: Dispatch<UserAction>) {
        try {
            if (username === null) {
                dispatch({type: UserActionTypes.FETCH_USER_ERROR, payload: "Ошибочка("})
                return
            }
            dispatch({type: UserActionTypes.FETCH_USER})
            const requestHeaders: HeadersInit = new Headers();
            requestHeaders.set("Authorization", process.env.REACT_APP_API_KEY!);
            const url = "https://api.github.com/users/" + username;
            fetch(url, {
                headers: requestHeaders
            })
            .then((data)=>data.json())
            .then((json)=> {
                if (json.message === "Not Found") {
                    dispatch({
                        type: UserActionTypes.FETCH_USER_ERROR,
                        payload: "Кажется, такого аккаунта нет "
                    })
                } else {
                    dispatch({
                        type: UserActionTypes.FETCH_USER_SUCCESS,
                        payload: json
                    })
                }
            })
            .catch((error) => {
                dispatch({
                    type: UserActionTypes.FETCH_USER_ERROR,
                    payload: "Ошибочка"
                }) 
            });
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: "Ошибочка"
            })            
        }
    }
}
import { Dispatch } from "redux";
import API from "src/api/api";

import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  RESET_USER_COMPONENT,
  ADD_USER,
} from "./actionConstants";

export const getUsersRequest = (): ReduxAction => ({ type: GET_USERS_REQUEST });

export const getUsersSuccess = (payload: UserPayload) => ({
  type: GET_USERS_SUCCESS,
  payload: payload,
});

export const getUsersFail = (payload: Error | unknown) => ({
  type: GET_USERS_FAIL,
  payload,
});

export const getUsers = (query?: UserQuery) => {
  return async (dispatch: Dispatch) => {
    dispatch(getUsersRequest());
    try {
      const response = await API.get("/users");
      const payload = {
        status: response.status,
        data: response.data,
        ...query,
      };
      dispatch(getUsersSuccess(payload));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
};

export const addUser = (payload: User): ReduxAction => ({
  type: ADD_USER,
  payload,
});

export const resetUserComponent = (): ReduxAction => ({
  type: RESET_USER_COMPONENT,
});

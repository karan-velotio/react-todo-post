import { Dispatch } from "redux";
import API from "src/api/api";

import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  RESET_USER_COMPONENT,
} from "./actionConstants";

export const getUsersRequest = () => ({ type: GET_USERS_REQUEST });

export const getUsersSuccess = (payload: UserActionPayloadData) => ({
  type: GET_USERS_SUCCESS,
  payload: payload,
});

export const getUsersFail = (payload: UserActionPayloadError) => ({
  type: GET_USERS_FAIL,
  payload,
});

export const getUsers = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getUsersRequest());
    try {
      const response = await API.get("/users");
      const payload = { status: response.status, data: response.data };
      dispatch(getUsersSuccess(payload));
    } catch (error) {
      dispatch(getUsersFail({ error }));
    }
  };
};

export const resetUserComponent = () => ({ type: RESET_USER_COMPONENT });

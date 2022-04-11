import { Dispatch } from "redux";
import API from "src/api/api";

import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL, RESET_USER_COMPONENT } from "./actionConstants";

export const getUsers = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: GET_USERS_REQUEST });
    try {
      const response = await API.get("/users");
      const payload = { status: response.status, data: response.data };
      dispatch({ type: GET_USERS_SUCCESS, payload });
    } catch (error) {
      dispatch({ type: GET_USERS_FAIL, payload: { error } });
    }
  };
};

export const resetUserComponent = () => ({ type: RESET_USER_COMPONENT });

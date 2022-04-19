import { Dispatch } from "redux";
import API from "src/api/api";

import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
  RESET_TODOS_COMPONENT,
  TOGGLE_TODO_CHECK
} from "src/state/todos/actionConstants";

export const getTodosRequest = (): ReduxAction => ({ type: GET_TODOS_REQUEST });

export const getTodosSuccess = (payload: TodosPayload) => ({
  type: GET_TODOS_SUCCESS,
  payload: payload,
});

export const getTodosFail = (payload: Error | unknown) => ({
  type: GET_TODOS_FAIL,
  payload,
});

export const getTodos = (query: TodosQuery) => {
  return async (dispatch: Dispatch) => {
    dispatch(getTodosRequest());
    try {
      const response = await API.get(`/users/${query.id}/todos`);
      const payload = {
        status: response.status,
        data: response.data,
        ...(query.loadMore && { loadMore: query.loadMore }),
      };
      dispatch(getTodosSuccess(payload));
    } catch (error) {
      dispatch(getTodosFail(error));
    }
  };
};

export const resetTodosComponent = (): ReduxAction => ({
  type: RESET_TODOS_COMPONENT,
});

export const handleToggleTodo = (payload: Todo): ReduxAction => ({
  type: TOGGLE_TODO_CHECK,
  payload
});

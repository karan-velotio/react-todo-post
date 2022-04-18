import { Dispatch } from "redux";
import API from "src/api/api";

import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
} from "src/state/posts/actionConstants";

export const getPostsRequest = (): ReduxAction => ({ type: GET_POSTS_REQUEST });

export const getPostsSuccess = (payload: PostPayload) => ({
  type: GET_POSTS_SUCCESS,
  payload: payload,
});

export const getPostsFail = (payload: Error | unknown) => ({
  type: GET_POSTS_FAIL,
  payload,
});

export const getPosts = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(getPostsRequest());
    try {
      const response = await API.get(`/users/${id}/posts`);
      const payload = {
        status: response.status,
        data: response.data,
      };
      dispatch(getPostsSuccess(payload));
    } catch (error) {
      dispatch(getPostsFail(error));
    }
  };
};

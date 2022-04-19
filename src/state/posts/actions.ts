import { Dispatch } from "redux";

import API from "src/api/api";
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  RESET_POST_COMPONENT,
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

export const getPosts = (query: PostQuery) => {
  return async (dispatch: Dispatch) => {
    dispatch(getPostsRequest());
    try {
      const response = await API.get(`/users/${query.id}/posts`);
      const payload = {
        status: response.status,
        data: response.data,
        ...(query.loadMore && { loadMore: query.loadMore }),
      };
      dispatch(getPostsSuccess(payload));
    } catch (error) {
      dispatch(getPostsFail(error));
    }
  };
};

export const resetPostComponent = (): ReduxAction => ({
  type: RESET_POST_COMPONENT,
});

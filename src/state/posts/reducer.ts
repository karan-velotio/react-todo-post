import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
} from "src/state/posts/actionConstants";

const initialState: PostStore = {
  status: "idle",
  posts: [],
  error: null,
};

const postsReducer = (
  state = initialState,
  action: ReduxAction<PostPayload>
): PostStore => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        posts: payload?.data || [],
        status: "success",
        error: null,
      };
    }
    case GET_POSTS_FAIL:
      return {
        ...state,
        status: "fail",
        error: payload,
      };
    default:
      return state;
  }
};

export default postsReducer;

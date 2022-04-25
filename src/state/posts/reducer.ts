import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  RESET_POST_COMPONENT
} from "src/state/posts/actionConstants";

const initialState: PostStore = {
  status: "idle",
  posts: [],
  error: null,
  totalPosts: 50,
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
      let posts: Post[] = [];
      if (payload && payload.data) {
        if (!payload.loadMore) {
          posts = payload.data;
        } else {
          posts = [...state.posts, ...payload.data];
        }
      }
      return {
        ...state,
        posts,
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
    case RESET_POST_COMPONENT:
      return {
        ...state,
        status: "idle",
        posts: [],
        error: null,
      };
    default:
      return state;
  }
};

export default postsReducer;

import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  RESET_USER_COMPONENT,
  ADD_USER,
} from "./actionConstants";

const initialState: UserStore = {
  status: "idle",
  users: [],
  error: null,
  totalUsers: 50,
};

const userReducer = (
  state = initialState,
  action: ReduxAction<UserPayload>
): UserStore => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case GET_USERS_SUCCESS: {
      let users: User[] = [];
      if (payload && payload.data) {
        if (!payload.loadMore) {
          users = payload.data;
        } else {
          users = [...state.users, ...payload.data];
        }
      }
      return {
        ...state,
        users,
        status: "success",
        error: null,
      };
    }
    case GET_USERS_FAIL:
      return {
        ...state,
        status: "fail",
        error: payload,
      };
    case ADD_USER:
      return <UserStore>{
        ...state,
        totalUsers: state.totalUsers + 1,
        users: [
          ...state.users,
          {
            ...payload,
            id: state.totalUsers + 1,
          },
        ],
      };
    case RESET_USER_COMPONENT:
      return {
        ...state,
        status: "idle",
        users: [],
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;

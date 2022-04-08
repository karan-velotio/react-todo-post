import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL } from "./actionConstants";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

interface userStore {
  status: "idle" | "loading" | "success" | "fail";
  users: User[];
  error: Error | string | null;
}

interface ActionUsers {
  type: string;
  payload: {
    data?: User[];
    status?: number;
    error?: Error | string;
  };
}


const initialState: userStore = {
  status: "idle",
  users: [],
  error: null
};

const userReducer = (state = initialState, action: ActionUsers) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        status: "loading",
        error: null
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: payload.data,
        status: "success",
        error: null
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        status: "fail",
        error: payload
      };
    default :
      return state;
  }
};

export default userReducer;

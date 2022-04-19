import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
  RESET_TODOS_COMPONENT,
  TOGGLE_TODO_CHECK,
} from "src/state/todos/actionConstants";

const initialState: TodosStore = {
  status: "idle",
  todos: [],
  error: null,
  totalTodos: 60,
};

const postsReducer = (
  state = initialState,
  action: ReduxAction<TodosPayload & Todo>
): TodosStore => {
  const { type, payload } = action;
  switch (type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case GET_TODOS_SUCCESS: {
      let todos: Todo[] = [];
      if (payload && payload.data) {
        if (!payload.loadMore) {
          todos = payload.data;
        } else {
          todos = [...state.todos, ...payload.data];
        }
      }
      return {
        ...state,
        todos,
        status: "success",
        error: null,
      };
    }
    case GET_TODOS_FAIL:
      return {
        ...state,
        status: "fail",
        error: payload,
      };
    case TOGGLE_TODO_CHECK: {
      const todosCopy = [...state.todos];
      if (payload) {
        const todoIndex = todosCopy.findIndex((item) => item.id === payload.id);
        todosCopy[todoIndex].completed = !payload.completed;
      }
      return {
        ...state,
        todos: todosCopy,
      };
    }
    case RESET_TODOS_COMPONENT:
      return {
        ...state,
        status: "idle",
        todos: [],
        error: null,
      };
    default:
      return state;
  }
};
export default postsReducer;

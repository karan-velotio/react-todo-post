declare interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

declare interface TodosStore {
  status: "idle" | "loading" | "success" | "fail";
  todos: Todo[];
  error: Error | String | Unknown;
  totalTodos: number;
}

declare interface TodosPayload {
  data: Todo[];
  status: number;
  loadMore?: boolean;
}

declare interface TodosQuery {
  id: number,
  loadMore?: boolean;
}

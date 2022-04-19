import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

import InfiniteScrollBox from "src/components/InfiniteScroll";
import {
  getTodos,
  handleToggleTodo,
  resetTodosComponent,
} from "src/state/todos/actions";

const Todo = () => {
  const params = useParams();
  const userId = Number(params.id);
  const dispatch = useDispatch();

  const [hasMore, setHasMore] = useState(true);

  const { todos, totalTodos } = useSelector((state: ReduxStore) => ({
    todos: state.todo.todos,
    totalTodos: state.todo.totalTodos,
  }));

  const fetchTodosData = (query: TodosQuery) => {
    if (todos.length === totalTodos) {
      setHasMore(false);
      return;
    }
    dispatch(getTodos(query));
  };

  useEffect(() => {
    fetchTodosData({ id: userId });

    return () => {
      dispatch(resetTodosComponent());
    };
  }, [dispatch, userId]);

  const renderTodos = useCallback((todo: Todo, index: number) => {
    const labelId = `checkbox-list-label-${todo.title}`;

    return (
      <ListItem key={index}>
        <ListItemButton
          role={undefined}
          onClick={() => dispatch(handleToggleTodo(todo))}
          dense
        >
          <ListItemText id={todo.title} primary={todo.title} />
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": labelId }}
            />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    );
  }, []);

  return (
    <Container maxWidth="xl">
      <InfiniteScrollBox
        dataLength={todos.length}
        next={() => fetchTodosData({ id: userId, loadMore: true })}
        hasMore={hasMore}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <List sx={{ width: "100%" }}>{todos.map(renderTodos)}</List>
      </InfiniteScrollBox>
    </Container>
  );
};
export default Todo;

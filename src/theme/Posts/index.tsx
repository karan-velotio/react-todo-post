import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";

import Loader from "src/components/Loader";
import { getPosts } from "src/state/posts/actions";

const Posts = () => {
  const params = useParams();
  const userId = Number(params.id);
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state: ReduxStore) => ({
    posts: state.post.posts,
    status: state.post.status,
  }));

  useEffect(() => {
    dispatch(getPosts(userId));
  }, [dispatch, userId]);

  const renderPost = useCallback(
    (post: Post) => (
      <div key={post.id}>
        <ListItem alignItems="flex-start">
          <ListItemText primary={post.title} secondary={post.body} />
        </ListItem>
        <Divider component="li" />
      </div>
    ),
    []
  );

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <Container maxWidth="xl">
      <List sx={{ width: "100%" }}>{posts.map(renderPost)}</List>
    </Container>
  );
};
export default Posts;

import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import InfiniteScrollBox from "src/components/InfiniteScroll";
import { getPosts, resetPostComponent } from "src/state/posts/actions";

const Posts = () => {
  const params = useParams();
  const userId = Number(params.id);
  const dispatch = useDispatch();

  const [hasMore, setHasMore] = useState(true);

  const { posts, totalPosts } = useSelector((state: ReduxStore) => ({
    posts: state.post.posts,
    totalPosts: state.post.totalPosts,
  }));

  const fetchPostsData = (query: PostQuery) => {
    if (posts.length === totalPosts) {
      setHasMore(false);
      return;
    }
    dispatch(getPosts(query));
  };

  useEffect(() => {
    fetchPostsData({ id: userId });

    return () => {
      dispatch(resetPostComponent());
    };
  }, [dispatch, userId]);

  const renderPost = useCallback(
    (post: Post, index) => (
      <div key={index}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
              <React.Fragment>
                <Typography variant="h5" color="text.primary">
                  {post.title}
                </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="h6"
                  color="text.secondary"
                >
                  {post.body}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider component="li" />
      </div>
    ),
    []
  );

  return (
    <Container maxWidth="xl">
      <InfiniteScrollBox
        dataLength={posts.length}
        next={() => fetchPostsData({ id: userId, loadMore: true })}
        hasMore={hasMore}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <List sx={{ width: "100%" }}>{posts.map(renderPost)}</List>
      </InfiniteScrollBox>
    </Container>
  );
};
export default Posts;

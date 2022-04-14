import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import UserCard from "src/components/UserCard";
import { getUsers, resetUserComponent } from "src/state/user/actions";

import InfiniteScroll from "react-infinite-scroll-component";

const Loader: React.FC = ()=> {
  return (
    <Box sx={{ display: "inline-block" , textAlign: "center", overflow: "hidden", height: "100%", width: "100%" }}>
      <CircularProgress />
    </Box>
  );
}

const User = () => {
  const dispatch = useDispatch();
  const { users, status } = useSelector((state: ReduxStore) => ({
    users: state.user.users,
    status: state.user.status
  }));

  const totalUsers = 50;
  const [hasMore, setHasMore] = useState(true);

  const fetchUsersData = (query?: UserQuery) => {
    if (!query) {
      dispatch(getUsers());
      return;
    }
    if (users.length === totalUsers) {
      setHasMore(false);
      return;
    }
    dispatch(getUsers(query));
  };

  useEffect(() => {
    fetchUsersData();

    return () => {
      dispatch(resetUserComponent());
    };
  }, []);

  const renderUserCard = useCallback(
    (user: User, index) => <UserCard key={index} user={user} />,
    []
  );
  
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          width: "calc(100% + 16px)",
          pt: 2,
          mt: -2,
          ml: -2,
        }}
      >
        <InfiniteScroll
          dataLength={users.length}
          next={() => fetchUsersData({loadMore: true})}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={
            <p
              style={{
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <b>Yay! You have seen it all</b>
            </p>
          }
          style={{ display: "flex", flexFlow: "row wrap" }}
        >
          {users.map(renderUserCard)}
        </InfiniteScroll>
      </Box>
    </Container>
  );

};

export default User;

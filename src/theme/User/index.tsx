import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { getUsers, resetUserComponent } from "src/state/user/actions";
import InfiniteScrollBox from "src/components/InfiniteScroll";
import UserCard from "src/components/UserCard";
import UserTopBar from "src/theme/User/UserTopBar";

const User = () => {
  const [hasMore, setHasMore] = useState(true);

  const dispatch = useDispatch();
  const { users, totalUsers } = useSelector((state: ReduxStore) => ({
    users: state.user.users,
    totalUsers: state.user.totalUsers,
  }));

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
  }, [dispatch]);

  const renderUserCard = useCallback(
    (user: User, index) => <UserCard key={index} user={user} />,
    []
  );

  return (
    <Container maxWidth="xl">
      <UserTopBar />
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
        <InfiniteScrollBox
          dataLength={users.length}
          next={() => fetchUsersData({ loadMore: true })}
          hasMore={hasMore}
          style={{ display: "flex", flexFlow: "row wrap" }}
        >
          {users.map(renderUserCard)}
        </InfiniteScrollBox>
      </Box>
    </Container>
  );
};

export default User;

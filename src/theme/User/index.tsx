import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InfiniteScrollBox from "src/components/InfiniteScroll";
import UserCard from "src/components/UserCard";
import { getUsers, resetUserComponent } from "src/state/user/actions";

const User = () => {
  const totalUsers = 50;
  const [hasMore, setHasMore] = useState(true);

  const dispatch = useDispatch();
  const { users } = useSelector((state: ReduxStore) => ({
    users: state.user.users,
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

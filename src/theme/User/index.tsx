import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import UserCard from "src/components/UserCard";
import { getUsers, resetUserComponent } from "src/state/user/actions";

const User = () => {
  const dispatch = useDispatch();
  const { users, status } = useSelector((state: ReduxStore) => ({
    users: state.user.users,
    status: state.user.status
  }));

  useEffect(() => {
    dispatch(getUsers());

    return () => {
      dispatch(resetUserComponent());
    };
  }, []);

  const renderUserCard = useCallback(
    (user: User) => <UserCard key={user.id} user={user} />,
    []
  );

  if (status === "loading") {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }
  
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
        { users.map(renderUserCard) }
      </Box>
    </Container>
  );

};

export default User;

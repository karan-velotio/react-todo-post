import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import UserCard from "src/components/UserCard";
import { getUsers } from "src/state/user/actions";

const User = () => {
  const dispatch = useDispatch();
  const { users, status } = useSelector((state: ReduxStore) => ({
    users: state.user.users,
    status: state.user.status,
  }));

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  } else {
    return (
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            padding: "20px 0",
            width: "calc(100% + 20px)",
            margin: "-20px 0 0 -20px"
          }}
        >
          {
            (status === "success") && users.map((user) => <UserCard key={user.id} user={user} />)
          }
        </Box>
      </Container>
    );
  }

};

export default User;

import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import UserForm from "src/theme/User/UserForm";
import { addUser } from "src/state/user/actions";

import { useDispatch } from "react-redux";

const AddUser = () => {
  const dispatch = useDispatch();
  const _addUser = (user: User) => {
    dispatch(addUser(user));
  };
  return <UserForm submitAction={_addUser} />;
};

const UserTopBar = () => {
  return (
    <Box width="100%">
      <Stack pt={2} alignItems={"end"}>
        <AddUser />
      </Stack>
    </Box>
  );
};

export default UserTopBar;

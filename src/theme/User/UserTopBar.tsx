import React, { memo } from "react";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { addUser } from "src/state/user/actions";
import UserForm from "src/theme/User/UserForm";

const AddUserComponent = () => {
  const dispatch = useDispatch();
  const _addUser = (user: User) => {
    dispatch(addUser(user));
  };
  return <UserForm submitAction={_addUser} />;
};

const AddUser = memo(AddUserComponent);

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

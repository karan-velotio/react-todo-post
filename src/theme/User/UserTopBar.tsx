import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const UserTopBar = () => {
  return (
    <Box width="100%">
      <Stack pt={2} alignItems={"end"}>
        <Button variant="contained" startIcon={<AddIcon />}>
          Add User
        </Button>
      </Stack>
    </Box>
  );
};

export default UserTopBar;

import React, { useCallback, memo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import UserForm from "src/theme/User/UserForm";
import { useDispatch } from "react-redux";
import { updateUser } from "../../state/user/actions";

type IUserProps = {
  user: User;
};

type IEditUserProps = {
  user: User;
  onOpen?: () => void;
};

const EditUserComponent: React.FC<IEditUserProps> = ({ user, onOpen }) => {
  const dispatch = useDispatch();
  const _editUser = (user: User) => {
    dispatch(updateUser(user));
  };
  return (
    <UserForm
      isEdit={true}
      submitAction={_editUser}
      user={user}
      onOpen={onOpen}
    />
  );
};

const EditUser = memo(EditUserComponent);

const UserCard: React.FC<IUserProps> = ({ user }) => {
  const [anchorElMenu, setanchorElMenu] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setanchorElMenu(event.currentTarget);
    },
    []
  );

  const handleCloseUserMenu = useCallback(() => {
    setanchorElMenu(null);
  }, []);

  return (
    <Card
      sx={{
        position: "relative",
        width: {
          md: "calc(33.33% - 20px)",
          sm: "calc(50% - 20px)",
          xs: "100%",
        },
        margin: "20px 0 0 20px",
      }}
    >
      <IconButton
        aria-label="settings"
        sx={{ position: "absolute", right: 2 }}
        onClick={handleOpenUserMenu}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        sx={{ mt: "45px" }}
        anchorEl={anchorElMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElMenu)}
        onClose={handleCloseUserMenu}
      >
        <EditUser user={user} onOpen={handleCloseUserMenu} />
      </Menu>
      <CardContent sx={{ padding: "20px" }}>
        <Avatar
          area-label="user"
          sx={{
            width: "50%",
            height: "50%",
            margin: "auto",
            aspectRatio: "1 / 1",
          }}
        />
        <Typography
          textAlign="center"
          mt={1}
          variant="body2"
          color="text.secondary"
        >
          {user.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;

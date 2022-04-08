import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface IUserProps {
  id: number;
  name: string,
  username?: string,
  email?: string
};

const UserCard: React.FC<IUserProps> = ({ name }) => {
  const [anchorElMenu, setanchorElMenu] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setanchorElMenu(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setanchorElMenu(null);
  };

  return (
    <Card
      sx={{
        position: "relative",
        width: { md: "calc(33.33% - 20px)", sm: "calc(50% - 20px)", xs: "100%" },
        margin: "20px 0 0 20px"
      }}
    >
      <IconButton aria-label="settings" sx={{ position: "absolute", right: 2 }} onClick={handleOpenUserMenu}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        sx={{ mt: "45px" }}
        anchorEl={anchorElMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={Boolean(anchorElMenu)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Edit</Typography>
        </MenuItem>
      </Menu>
      <CardContent sx={{ padding: "20px" }}>
        <Avatar
          area-label="user"
          sx={{
            width: "50%",
            height: "50%",
            margin: "auto",
            aspectRatio: "1 / 1"
          }} />
        <Typography textAlign="center" mt={1} variant="body2" color="text.secondary">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;

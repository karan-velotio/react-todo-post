import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

interface IUserProps {
  id: number;
  name: string,
  username?: string,
  email?: string
};

const UserCard: React.FC<IUserProps> = ({ name }) => (
  <Card sx={{ maxWidth: 345, margin: "0 16px 16px 0", position: "relative" }}>
    <IconButton aria-label="settings" sx={{ position: "absolute", right: 0 }}>
      <MoreVertIcon />
    </IconButton>
    <CardContent>
      <Avatar area-label="user" sx={{ height: "200px", width: "200px", margin: "auto" }} />
      <Typography textAlign="center" mt={1} variant="body2" color="text.secondary">
        {name}
      </Typography>
    </CardContent>
  </Card>
);

export default UserCard;

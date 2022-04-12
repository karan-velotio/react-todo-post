import React, { memo } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

interface INavMenuProps {
  routes: AppRoute[]
};

const NavMenu: React.FC<INavMenuProps> = ({ routes }) => {

  return (
    <React.Fragment>
      {
        routes.map(({ pathName, name }) => (
          <Link key={name} style={{ textDecoration: "none", color: "white" }} to={pathName}>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {name}
            </Button>
          </Link>
        ))
      }
    </React.Fragment>
  );
};

export default memo(NavMenu);

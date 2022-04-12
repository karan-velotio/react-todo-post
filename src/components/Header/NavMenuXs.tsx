import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";


interface INavMenuXsProps {
  routes: AppRoute[];
  handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
};

const NavMenuXs: React.FC<INavMenuXsProps> = ({ routes, handleCloseNavMenu }) => {
  const location = useLocation();
  console.log('here', location);
  return (
    <React.Fragment>
      {
        routes.map(({ pathName, name }) => (
          <MenuItem key={name} onClick={handleCloseNavMenu} selected={pathName === location.pathname}>
            <Typography textAlign="center">
              <Link to={pathName} style={{ textDecoration: "none", color: "black" }}>
                {name}
              </Link>
            </Typography>
          </MenuItem>
        ))
      }
    </React.Fragment>
  );
};

export default memo(NavMenuXs);

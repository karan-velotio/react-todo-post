import React, { CSSProperties } from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

interface ILoaderProps {
  style?: CSSProperties;
}

const Loader: React.FC<ILoaderProps> = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: "1",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;

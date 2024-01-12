import { Box, BoxProps } from "@mui/material";
import React from "react";

const PrevArrowBtn: React.FC<BoxProps> = (props) => (
  <Box
    {...props}
    style={{
      display: "block",
      position: "absolute",
      left: 20,
      zIndex: 1400,
      height: 24,
      width: 24,
    }}
  />
);

export default PrevArrowBtn;

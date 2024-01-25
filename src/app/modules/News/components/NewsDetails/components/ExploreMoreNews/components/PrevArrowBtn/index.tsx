import { Box, BoxProps } from "@mui/material";
import React from "react";

const PrevArrowBtn: React.FC<BoxProps> = (props) => {
  const { onClick, className, style } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        // display: "block",
        background: "grey",
        borderRadius: 100,
      }}
      onClick={onClick}
    />
  );
};

export default PrevArrowBtn;

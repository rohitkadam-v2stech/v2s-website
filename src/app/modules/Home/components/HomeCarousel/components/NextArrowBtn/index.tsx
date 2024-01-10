import { Box, BoxProps } from "@mui/material";

const NextArrowBtn: React.FC<BoxProps> = (props) => (
  <Box
    {...props}
    style={{
      display: "block",
      position: "absolute",
      right: 20,
      height: 24,
      width: 24,
    }}
  />
);

export default NextArrowBtn;

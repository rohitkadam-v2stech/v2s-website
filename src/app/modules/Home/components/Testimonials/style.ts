import { Box, styled } from "@mui/material";

export const SliderWrapper = styled(Box)(({ theme }) => ({
  ".slick-list": {
    paddingLeft: 10,
    paddingRight: 16,
  },
  [theme.breakpoints.up("lg")]: {
    marginInline: 150,
  },
}));

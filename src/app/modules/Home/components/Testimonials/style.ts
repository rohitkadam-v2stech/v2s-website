import { Box, styled } from "@mui/material";

export const SliderWrapper = styled(Box)(({ theme }) => ({
  ".slick-list": {
    paddingLeft: 8,
    paddingRight: 14,
  },
  [theme.breakpoints.up("lg")]: {
    marginInline: 150,
  },
}));

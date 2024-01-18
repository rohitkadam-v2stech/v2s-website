import { Box, Card, styled } from "@mui/material";
import COLORS from "../../../../styles/colors";

export const StyledAboutClientCard = styled(Card)({
  my: 2,
  width: 260,
  backgroundColor: COLORS.DARK_BLUE,
  color: COLORS.WHITE,
  borderRadius: 8,
  textAlign: "center",
});

export const SliderWrapper = styled(Box)(({ theme }) => ({
  ".slick-list": {
    paddingLeft: 8,
    paddingRight: 14,
  },
  [theme.breakpoints.up("lg")]: {
    marginInline: 150,
  },
  height: "100%",
}));

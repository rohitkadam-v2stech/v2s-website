import { Card, styled } from "@mui/material";
import COLORS from "../../../../styles/colors";

export const StyledAboutClientCard = styled(Card)({
  my: 2,
  width: 260,
  backgroundColor: COLORS.DARK_BLUE,
  color: COLORS.WHITE,
  borderRadius: 8,
  textAlign: "center",
});

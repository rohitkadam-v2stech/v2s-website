import { Fab, styled } from "@mui/material";
import COLORS from "./colors";

export const StyledScrollToTopButton = styled(Fab)(() => ({
  position: "fixed",
  bottom: "50px",
  right: "30px",
  backgroundColor: COLORS.WHITE,
  color: COLORS.PRIMARY_BLUE,
  borderRadius: 2,
}));

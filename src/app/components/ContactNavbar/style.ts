import { Typography, styled } from "@mui/material";
import COLORS from "../../styles/colors";

export const StyledContactNavbarText = styled(Typography)({
  fontWeight: 500,
  color: COLORS.WHITE,
  "&:hover": {
    color: COLORS.HOVER_YELLOW,
  },
});

import { Toolbar, Typography, styled } from "@mui/material";
import COLORS from "../../styles/colors";

export const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledNavBarText = styled(Typography)(() => ({
  fontSize: "15px",
  fontWeight: 700,
  "&:hover": {
    cursor: "pointer",
    color: COLORS.PRIMARY_BLUE,
  },
}));

import { Toolbar, Typography, styled } from "@mui/material";

export const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledNavBarText = styled(Typography)(() => ({
  fontSize: "15px",
  fontWeight: 700,
}));

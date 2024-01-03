import { Box, styled } from "@mui/material";

export const StyledFullScreenLoaderWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: `100vh`,
});

export const StyledAppLoaderWrapper = styled(StyledFullScreenLoaderWrapper)({
  minHeight: `calc(100vh - 64px)`,
});

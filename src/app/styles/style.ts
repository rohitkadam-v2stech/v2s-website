import { Box, Fab, styled, Divider } from "@mui/material";
import COLORS from "./colors";

export const StyledFullScreenLoaderWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: `100vh`,
});

export const StyledAppLoaderWrapper = styled(StyledFullScreenLoaderWrapper)({
  minHeight: `calc(100vh - 64px)`,
});

export const StyledScrollToTopButton = styled(Fab)(() => ({
  position: "fixed",
  bottom: "50px",
  right: "30px",
  backgroundColor: COLORS.WHITE,
  color: COLORS.PRIMARY_BLUE,
  borderRadius: 2,
}));

export const DashedDivider = styled(Divider)({
  border: 0,
  borderTop: `2px dashed ${COLORS.LIGHT_BLUE}`, // Change color as needed
});

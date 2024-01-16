import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import COLORS from "../../../../styles/colors";
import CircleIcon from "@mui/icons-material/Circle";

export const StyledOutlinedContainer = styled(Box)({
  position: "relative",
  border: `2px solid ${COLORS.DARK_BLUE}`,
  borderRadius: "20px",
  paddingBlock: 16,
  paddingLeft: 12,
});

export const StyledCircleIcon = styled(CircleIcon)({
  position: "absolute",
  bottom: 20,
  left: -6,
  width: 12,
  height: 12,
  borderRadius: "50%",
  color: COLORS.DARK_BLUE,
});

export const StyledOurApproachTitleContainer = styled(Box)({
  position: "absolute",
  top: -45,
  left: -10,
  backgroundColor: COLORS.WHITE,
  paddingInline: 6,
  paddingBlock: 16,
  marginLeft: 1,
});

export const StyledContentGrid = styled(Grid)({
  marginLeft: -12,
  // paddingInline: 2,
  paddingBlock: 20,
  backgroundColor: COLORS.WHITE,
  paddingRight: 16,
});

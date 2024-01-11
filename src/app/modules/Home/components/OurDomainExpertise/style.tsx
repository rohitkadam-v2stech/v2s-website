import { Box, Paper, Stack, Typography, styled } from "@mui/material";
import COLORS from "../../../../styles/colors";

export const StyledCard = styled(Paper)({
  borderTopRightRadius: 40,
  borderBottomRightRadius: 40,
  paddingTop: "50px",
  paddingLeft: "16px",
  width: 400,
  height: 450,
});

export const StyledCardNumberContainer = styled(Box)({
  borderTopLeftRadius: "15px",
  borderBottomLeftRadius: "15px",
  paddingInline: "13px",
  boxShadow: `4px 1px 11px 0px ${COLORS.DARK_BLUE} inset`,
});

export const StyledCardNumberText = styled(Typography)({
  fontSize: "50px",
  fontWeight: "700",
  color: COLORS.WHITE,
  textAlign: "center",
});

export const StyledCardTitle = styled(Typography)({
  textAlign: "left",
  fontSize: "22px",
  fontWeight: "700",
  lineHeight: "23px",
  height: 50,
  marginTop: 6,
  color: COLORS.DARK_BLUE,
});

export const StyledCardContainer = styled(Stack)({
  justifyContent: "space-between",
  alignItems: "flex-start",
  height: "60%",
  marginTop: 4,
});

export const StyledCardDescription = styled(Typography)({
  fontSize: "17px",
  fontWeight: "600",
  lineHeight: "24px",
  paddingRight: 6,
  color: COLORS.DARK_BLUE,
});

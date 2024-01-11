import { Stack, styled } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import COLORS from "../../../../styles/colors";

export const StyledCalendarIcon = styled(CalendarMonthIcon)({
  backgroundColor: "#efeff1",
  color: COLORS.NAVY_BLUE,
  fontSize: 36,
  padding: 8,
  borderRadius: 20,
});

export const StyledCalendarActiveIcon = styled(CalendarMonthIcon)({
  backgroundColor: COLORS.PRIMARY_BLUE,
  color: COLORS.WHITE,
  fontSize: 36,
  padding: 8,
  borderRadius: 20,
});

export const StyledGrowthStoryCard = styled(Stack)({
  position: "relative",
  width: 365,
  flex: "0 0 auto",
  padding: 30,
  backgroundColor: COLORS.OCEAN_BLUE,
});

export const StyledArrowIcon = styled(ArrowDropDownIcon)({
  position: "absolute",
  fontSize: 60,
  bottom: -35.2,
  left: 8,
  color: COLORS.OCEAN_BLUE,
});

export const StyledGrowthStoryCardsWrapper = styled(Stack)({
  width: "100%",
  paddingBlock: 2,
  marginBlock: 12,

  /* Style the scrollbar track */
  "&::-webkit-scrollbar": {
    width: "8px" /* width of the vertical scrollbar */,
    height: "8px" /* height of the horizontal scrollbar */,
  },

  /* Style the scrollbar handle/knob */
  "&::-webkit-scrollbar-thumb": {
    backgroundColor:
      COLORS.NAVY_BLUE /* Set the color of the scrollbar handle */,
    borderRadius: "8px" /* Set the border-radius to make it rounder */,
  },

  /* Style the scrollbar track when the handle is being dragged */
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: COLORS.NAVY_BLUE /* Change color on hover */,
  },

  /* Style the scrollbar track */
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#efeff1" /* Set the color of the scrollbar track */,
  },

  /* Style the scrollbar corner */
  "&::-webkit-scrollbar-corner": {
    backgroundColor:
      COLORS.BACKGROUND_GREY /* Set the color of the scrollbar corner */,
  },
});

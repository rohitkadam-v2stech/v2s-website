import { Box, Button, Stack, styled } from "@mui/material";
import COLORS from "../../../../styles/colors";
import { ArrowBack } from "@mui/icons-material";

export const SliderWrapper = styled(Box)({
  // ".slick-arrow .slick-prev": {
  //   display: "none",
  // position: "absolute",
  // left: 100,
  // },
  // ".slick-arrow .slick-next": {
  // position: "absolute",
  // right: 100,
  // },
  ".slick-dots li.slick-active button:before": {
    color: COLORS.WHITE,
    fontSize: 12,
    marginTop: 20,
  },
  ".slick-dots li button:before": {
    fontSize: 12,
    marginTop: 20,
    color: COLORS.DARK_BLUE,
  },
});

// Replace with the path to your image
export const StyledContainer = styled(Box)<{ imgPath: string }>(
  ({ imgPath }) =>
    ({ theme }) => ({
      backgroundImage: `url(${imgPath})`,
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      // // width: "100%",
      // display: "flex",
      // // paddingBottom: 40,
      [theme.breakpoints.up("xs")]: {
        height: "50vh",
        width: "100%",
        backgroundPosition: "center",
      },
      [theme.breakpoints.up("sm")]: {
        height: "75vh",
        width: "100%",
        backgroundPosition: "center",
      },
      [theme.breakpoints.up("md")]: {
        paddingBottom: 40,
        height: "100vh",
        width: "100%",
        backgroundPosition: "center",
      },
      [theme.breakpoints.up("lg")]: {
        height: "100vh",
        paddingBottom: 40,
        width: "100%",
        backgroundPosition: "center",
      },
    })
);

export const StyledContent = styled(Stack)(({ theme }) => ({
  color: COLORS.WHITE,
  borderRadius: theme.spacing(1),
  [theme.breakpoints.up("xs")]: {
    paddingLeft: 56,
    width: 300,
  },
  [theme.breakpoints.up("sm")]: {
    paddingLeft: 75,
    width: 300,
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: 10,
    width: 500,
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 90,
    width: 500,
  },
}));

export const StyledCarouselBtn = styled(Button)(({ theme }) => ({
  color: COLORS.WHITE,
  backgroundColor: COLORS.DARK_BLUE,
  borderRadius: 0,
  borderColor: COLORS.WHITE,
  borderWidth: 2,
  textTransform: "capitalize",
  [theme.breakpoints.up("xs")]: {
    fontSize: 14,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 14,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: 14,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: 14,
  },
}));

export const StyledIconBtn = styled(ArrowBack)(({ theme }) => ({
  display: "block",
  background: "red",
  position: "absolute",
  right: 20,
  zIndex: 1400,
}));

// export const StyledPrevArrowBtn = styled((props) => <Box {...props} />)({
//   display: "block",
//   position: "absolute",
//   left: 20,
//   zIndex: 1400,
// });

// export const StyledNextArrowBtn = styled((props) => <Box {...props} />)({
//   display: "block",
//   position: "absolute",
//   right: 20,
// });

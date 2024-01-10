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
  ({ imgPath }) => ({
    backgroundImage: `url(${imgPath})`,
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 40,
  })
);

export const StyledContent = styled(Stack)(({ theme }) => ({
  paddingLeft: 90,
  color: COLORS.WHITE,
  borderRadius: theme.spacing(1),
  width: 500,
}));

export const StyledCarouselBtn = styled(Button)({
  color: COLORS.WHITE,
  backgroundColor: COLORS.DARK_BLUE,
  borderRadius: 0,
  borderColor: COLORS.WHITE,
  borderWidth: 2,
  textTransform: "capitalize",
  fontSize: 16,
});

export const StyledIconBtn = styled(ArrowBack)({
  display: "block",
  background: "red",
  position: "absolute",
  right: 20,
  zIndex: 1400,
});

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

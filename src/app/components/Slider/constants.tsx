import { Box } from "@mui/material";
import { type Settings as ReactSliderProps } from "react-slick";
import nextIcon from "../../assets/sliderBtnIcons/next.png";
import previousIcon from "../../assets/sliderBtnIcons/previous.png";

export const SLIDER_DEFAULT_PROPS: ReactSliderProps = {
  dots: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: true,
  infinite: true,
  prevArrow: <Box component="img" src={previousIcon} />,
  nextArrow: <Box component="img" src={nextIcon} />,
  // autoplay: true,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 5,
  //       slidesToScroll: 1,
  //       infinite: true,
  //       dots: true,
  //     },
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 1,
  //       initialSlide: 0,
  //     },
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
};

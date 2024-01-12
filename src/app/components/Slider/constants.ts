import { type Settings as ReactSliderProps } from "react-slick";

export const SLIDER_DEFAULT_PROPS: ReactSliderProps = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
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

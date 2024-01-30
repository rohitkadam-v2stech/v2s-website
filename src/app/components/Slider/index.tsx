import ReactSlider, { type Settings as ReactSliderProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";
import { SLIDER_DEFAULT_PROPS } from "./constants";

const Slider: React.FC<ReactSliderProps> = (props) => (
  <ReactSlider {...SLIDER_DEFAULT_PROPS} {...props} />
);

export default Slider;

import Box from "@mui/material/Box";

import COLORS from "../../../../styles/colors";
import Slider from "../../../../components/Slider";
import BannerCard from "./components/BannerCard";
import { SliderWrapper } from "./style";
import { HOME_CAROUSEL_CARD_LIST } from "./constants";
// import PrevArrowBtn from "./components/PrevArrowBtn";
// import NextArrowBtn from "./components/NextArrowBtn";

const HomeCarousel = () => (
  <Box bgcolor={COLORS.PRIMARY_BLUE} pb={12}>
    <SliderWrapper>
      <Slider
        // arrows
        slidesToShow={1}
        adaptiveHeight
        // prevArrow={<PrevArrowBtn />}
        // nextArrow={<NextArrowBtn />}
      >
        {HOME_CAROUSEL_CARD_LIST.map((item, id) => (
          <BannerCard key={id} {...item} />
        ))}
      </Slider>
    </SliderWrapper>
  </Box>
);

export default HomeCarousel;

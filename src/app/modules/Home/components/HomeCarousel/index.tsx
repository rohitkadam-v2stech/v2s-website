import Box from "@mui/material/Box";

import COLORS from "../../../../styles/colors";
import Slider from "../../../../components/Slider";
import BannerCard from "./components/BannerCard";
import { SliderWrapper } from "./style";
import { HOME_CAROUSEL_CARD_LIST } from "./constants";
import PrevArrowBtn from "./components/PrevArrowBtn";
import NextArrowBtn from "./components/NextArrowBtn";

const HomeCarousel = () => (
  <Box
    bgcolor={COLORS.PRIMARY_BLUE}
    sx={{ height: "100%" }}
    pb={{ xs: 12, sm: 10, md: 12, lg: 12, xl: 12 }}
  >
    <SliderWrapper>
      <Slider
        arrows
        fade
        slidesToShow={1}
        adaptiveHeight
        prevArrow={<PrevArrowBtn />}
        nextArrow={<NextArrowBtn />}
      >
        {HOME_CAROUSEL_CARD_LIST.map((item, id) => (
          <BannerCard key={id} {...item} />
        ))}
      </Slider>
    </SliderWrapper>
  </Box>
);

export default HomeCarousel;

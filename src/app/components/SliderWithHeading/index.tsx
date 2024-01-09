import { Stack, Typography } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import COLORS from "../../styles/colors";
import { IMAGE_SLIDER_SETTINGS } from "../../config/constants";

type TSliderWithHeadingProps = {
  heading: string;
  data: any[];
};

const SliderWithHeading: React.FC<TSliderWithHeadingProps> = ({
  heading,
  data,
}) => {
  return (
    <>
      <Typography
        fontSize={30}
        fontWeight={700}
        color={COLORS.DARK_BLUE}
        textAlign="center"
        mb={6}
      >
        {heading}
      </Typography>

      <Slider {...IMAGE_SLIDER_SETTINGS}>
        {data?.map((item) => (
          <Stack key={item}>
            <img src={item} alt="slider-images" />
          </Stack>
        ))}
      </Slider>
    </>
  );
};

export default SliderWithHeading;

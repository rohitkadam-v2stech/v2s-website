import { Box, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import TestimonialCard from "./components/TestimonialCard";
import { messages } from "./config/messages";
import Slider from "../../../../components/Slider";
import { SliderWrapper } from "./style";
import useDeviceSize from "../../../../hooks/useDeviceSize";
import { TESTIMONIALS } from "./config/constant";

// import data from "./testimonials_data.json";

const Testimonials = () => {
  const { isOnMobile, isOnTablet } = useDeviceSize();

  return (
    <Box pb={10} pr={4}>
      <Stack spacing={10} justifyContent="center" alignItems="center" my={6}>
        <Typography
          px={12}
          color={COLORS.DARK_BLUE}
          fontWeight="600"
          fontSize="30px"
        >
          {messages.testimonials}
        </Typography>
      </Stack>
      <SliderWrapper>
        <Slider slidesToShow={isOnMobile || isOnTablet ? 1 : 2}>
          {TESTIMONIALS.map((item) => (
            <TestimonialCard {...item} />
          ))}
        </Slider>
      </SliderWrapper>
    </Box>
  );
};

export default Testimonials;

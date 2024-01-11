import { Box, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import TestimonialCard from "./components/TestimonialCard";
import { messages } from "./config/messages";
import Slider from "../../../../components/Slider";
import { SliderWrapper } from "./style";
import nickLawford from "../../../../assets/testimonials/Fissara-2-696x392-1.jpg";
import useDeviceSize from "../../../../hooks/useDeviceSize";

const Testimonials = () => {
  const TESTIMONIALS_POSTS: Array<{
    imgPath: string;
    username: string;
    companyName: string;
    positionName: string;
    content: string;
  }> = [
    {
      username: "Nick Lawford",
      companyName: "Carebeans, UK",
      positionName: "CEO",
      imgPath: nickLawford,
      content:
        "We have been working with V2STech Solutions and developed 2 significant platforms both of them around mobile workforce in maintenance & engineering sector. We always had good relationship with V2STech and hope that we will continue for many more years.",
    },
    {
      username: "Nick Lawford",
      companyName: "Carebeans, UK",
      positionName: "CEO",
      imgPath: nickLawford,
      content:
        "We have been working with V2STech Solutions and developed 2 significant platforms both of them around mobile workforce in maintenance & engineering sector. We always had good relationship with V2STech and hope that we will continue for many more years.",
    },
    {
      username: "Nick Lawford",
      companyName: "Carebeans, UK",
      positionName: "CEO",
      imgPath: nickLawford,
      content:
        "We have been working with V2STech Solutions and developed 2 significant platforms both of them around mobile workforce in maintenance & engineering sector. We always had good relationship with V2STech and hope that we will continue for many more years.",
    },
    {
      username: "Nick Lawford",
      companyName: "Carebeans, UK",
      positionName: "CEO",
      imgPath: nickLawford,
      content:
        "We have been working with V2STech Solutions and developed 2 significant platforms both of them around mobile workforce in maintenance & engineering sector. We always had good relationship with V2STech and hope that we will continue for many more years.",
    },
  ];

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
          {TESTIMONIALS_POSTS.map((item) => (
            <TestimonialCard {...item} />
          ))}
        </Slider>
      </SliderWrapper>
    </Box>
  );
};

export default Testimonials;

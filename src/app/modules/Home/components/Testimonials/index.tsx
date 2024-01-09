import { Box, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import TestimonialCard from "./components/TestimonialCard";
import { messages } from "./config/messages";

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
      imgPath:
        "https://v2stech.com/wp-content/uploads/2023/11/Fissara-2-696x392-1.jpg",
      content:
        "We have been working with V2STech Solutions and developed 2 significant platforms both of them around mobile workforce in maintenance & engineering sector. We always had good relationship with V2STech and hope that we will continue for many more years.",
    },
    {
      username: "Nick Lawford",
      companyName: "Carebeans, UK",
      positionName: "CEO",
      imgPath:
        "https://v2stech.com/wp-content/uploads/2023/11/Fissara-2-696x392-1.jpg",
      content:
        "We have been working with V2STech Solutions and developed 2 significant platforms both of them around mobile workforce in maintenance & engineering sector. We always had good relationship with V2STech and hope that we will continue for many more years.",
    },
  ];

  return (
    <Box>
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
      <Stack
        spacing={3}
        direction="row"
        justifyContent="space-between"
        mx={40}
        mb={10}
      >
        {TESTIMONIALS_POSTS.map((item) => (
          <TestimonialCard {...item} />
        ))}
      </Stack>
    </Box>
  );
};

export default Testimonials;

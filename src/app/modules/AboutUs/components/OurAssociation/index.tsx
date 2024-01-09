import { Box, Stack, Typography } from "@mui/material";
import Slider from "../../../../components/Slider";
import { OUR_ASSOCIATION_IMAGES_LIST } from "../../../../config/constants";
import COLORS from "../../../../styles/colors";
import { messages } from "./config/messages";

const OurAssociation: React.FC = () => (
  <Box px="6%" py={8} mb={16}>
    <Typography
      fontSize={30}
      fontWeight={700}
      color={COLORS.DARK_BLUE}
      textAlign="center"
      mb={6}
    >
      {messages.ourAssociations}
    </Typography>
    <Slider slidesToShow={4}>
      {OUR_ASSOCIATION_IMAGES_LIST.map((item) => (
        <Stack key={item}>
          <img src={item} alt="slider-images" />
        </Stack>
      ))}
    </Slider>
  </Box>
);

export default OurAssociation;

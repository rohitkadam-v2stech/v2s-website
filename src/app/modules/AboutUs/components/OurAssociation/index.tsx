import { Box, Grid, Stack, Typography } from "@mui/material";

import { OUR_ASSOCIATION_IMAGES_LIST } from "../../../../config/constants";
import COLORS from "../../../../styles/colors";
import { messages } from "./config/messages";

const OurAssociation: React.FC = () => (
  // <Box px="6%" py={8} mb={16}>
  //   <Typography
  //     fontSize={30}
  //     fontWeight={700}
  //     color={COLORS.DARK_BLUE}
  //     textAlign="center"
  //     mb={6}
  //   >
  //     {messages.ourAssociations}
  //   </Typography>
  //   <Slider slidesToShow={4}>
  //     {OUR_ASSOCIATION_IMAGES_LIST.map((item) => (
  //       <Stack key={item}>
  //         <img src={item} alt="slider-images" />
  //       </Stack>
  //     ))}
  //   </Slider>
  // </Box>

  <Box px="10%" py={8} mb={16}>
    <Typography
      fontSize={30}
      fontWeight={700}
      color={COLORS.DARK_BLUE}
      textAlign="center"
      mb={6}
    >
      {messages.ourAssociations}
    </Typography>

    <Grid container>
      {OUR_ASSOCIATION_IMAGES_LIST.map((item) => (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Stack justifyContent="center" alignItems="center" height="100%">
            <img
              src={item}
              alt="associations"
              width={200}
              style={{ maxHeight: 100 }}
            />
          </Stack>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default OurAssociation;

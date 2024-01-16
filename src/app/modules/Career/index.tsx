import { Box, Divider, Grid, Stack, Typography } from "@mui/material";

import COLORS from "../../styles/colors";
import { messages } from "./config/messages";
import { Email, Phone } from "./constants";
import CurrentOpenings from "./components/CurrentOpenings";
import TrustedBy from "./components/TrustedBy";
import Recognition from "./components/Recognition";
import LifeAtV2stech from "./components/LifeAtV2stech";
import WeCareOurEmployees from "./components/WeCareOurEmployees";
import { StyledImageContainer } from "./style";

const Career = () => {
  return (
    <Box>
      <StyledImageContainer />
      <Grid
        container
        px={{ xs: 4, sm: 4, md: 12, lg: 22 }}
        py={8}
        bgcolor={COLORS.WHITE}
      >
        <Grid item xs={12} md={8.5} lg={8.5} xl={8.5}>
          <Stack spacing={2}>
            <Typography
              fontSize="30px"
              fontWeight="700"
              color={COLORS.DARK_BLUE}
            >
              {messages.instructions}
            </Typography>
            <Typography fontSize="20px" fontWeight="400" textAlign="justify">
              {messages.instructionsContent}
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={0.1} lg={0.1} xl={0.1} textAlign="center" px={2}>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={12} md={3.2} lg={3.2} xl={3.2}>
          <Stack spacing={2}>
            <Typography
              fontSize="30px"
              fontWeight="700"
              color={COLORS.DARK_BLUE}
            >
              {messages.contactDetails}
            </Typography>
            <Box>
              <Typography fontSize="20px" fontWeight="400">
                {messages.email} {Email}
              </Typography>
              <Typography fontSize="20px" fontWeight="400">
                {messages.phone} {Phone}
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <CurrentOpenings />
      <TrustedBy />
      <Recognition />
      <LifeAtV2stech />
      <WeCareOurEmployees />
    </Box>
  );
};

export default Career;

import { Box, Grid, Stack, Typography } from "@mui/material";
import { messages } from "../../config/messages";
import COLORS from "../../../../styles/colors";
import glassdoorReview from "../../../../assets/glassdoor.png";
import ambitionboxReview from "../../../../assets/ambitionbox.png";
import googleReview from "../../../../assets/google_reviews.png";

const TrustedBy = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      py={6}
      bgcolor={COLORS.WHITE}
      // spacing={1}
    >
      <Typography fontSize="24px" fontWeight="700" color={COLORS.DARK_BLUE}>
        {messages.trustedBy}
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        px={{ xs: 2, sm: 2, md: 2, lg: 2 }}
      >
        <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
          <Box component="img" src={glassdoorReview} width="100%" />
        </Grid>
        <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
          <Box component="img" src={ambitionboxReview} width="100%" />
        </Grid>
        <Grid item xs={12} sm={12} md={3.5} lg={3.5}>
          <Box component="img" src={googleReview} width="100%" />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default TrustedBy;

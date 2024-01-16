import { Box, Grid, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import { messages } from "../../config/messages";
import topDeveloper from "../../../../assets/Frame 15.png";
import topSoftwareCompany from "../../../../assets/Frame 16.png";
import techReviewerCompany from "../../../../assets/Frame 17.png";
import designRush from "../../../../assets/Frame 18.png";

const Recognition = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      bgcolor={COLORS.BACKGROUND_GREY}
      py={4}
    >
      <Typography
        mt={4}
        mb={6}
        fontSize="24px"
        fontWeight="700"
        color={COLORS.DARK_BLUE}
      >
        {messages.recognition}
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        // bgcolor="red"
        spacing={2}
        px={{ xs: 4, sm: 4, md: 16, lg: 44, xl: 44 }}
      >
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Box bgcolor={COLORS.WHITE} height="100%" textAlign="center" py={0}>
            <Box component="img" src={topDeveloper} height={104} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Box bgcolor={COLORS.WHITE} height="100%" textAlign="center">
            <Box component="img" src={topSoftwareCompany} height={100} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Box bgcolor={COLORS.WHITE} height="100%" textAlign="center">
            <Box component="img" src={techReviewerCompany} height={100} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Box bgcolor={COLORS.WHITE} height="100%" textAlign="center">
            <Box component="img" src={designRush} height={100} />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Recognition;

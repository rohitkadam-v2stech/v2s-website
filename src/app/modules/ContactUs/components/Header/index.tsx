import { Box, Grid, Stack, Typography } from "@mui/material";
import { messages } from "../../config/messages";
import COLORS from "../../../../styles/colors";
import ContactUsBanner from "../../../../assets/contactUsLogos/contact us banner.png";
import useDeviceSize from "../../../../hooks/useDeviceSize";

const Header: React.FC = () => {
  const { isOnMobile, isOnTablet } = useDeviceSize();

  return (
    <Box bgcolor={COLORS.DARK_BLUE}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6.5} lg={6.5} xl={6.5} px={12}>
          <Stack height="100%" justifyContent="center" py={4}>
            <Typography fontSize={40} fontWeight={700} color={COLORS.WHITE}>
              {messages.contactUs}
            </Typography>

            <Typography fontSize={24} fontWeight={400} color={COLORS.WHITE}>
              {messages.contactUsDescription}
            </Typography>
          </Stack>
        </Grid>

        {!isOnMobile && !isOnTablet && (
          <Grid item xs={12} sm={12} md={5.5} lg={5.5} xl={5.5}>
            <img
              src={ContactUsBanner}
              alt="contact-us-banner"
              width="100%"
              height="100%"
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Header;

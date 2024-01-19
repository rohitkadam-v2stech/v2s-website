import { Box, Grid, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import { messages } from "./config/messages";
import { CLIENT_LOGOS } from "./constants";
import useDeviceSize from "../../../../hooks/useDeviceSize";

const OurClients = () => {
  const { isOnMobile } = useDeviceSize();

  return (
    <Box bgcolor={COLORS.WHITE} pb={8}>
      <Stack spacing={10} justifyContent="center" alignItems="center" my={6}>
        <Typography
          px={isOnMobile ? 4 : 12}
          color={COLORS.DARK_BLUE}
          fontWeight="600"
          fontSize="30px"
        >
          {messages.ourClients}
        </Typography>
      </Stack>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        px={isOnMobile ? 4 : 12}
        py={2}
        spacing={4}
      >
        {CLIENT_LOGOS.map((imagePath, id) => (
          <Grid
            key={id}
            item
            sm={6}
            xs={12}
            md={3}
            lg={3}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <img alt="brand_logos" src={imagePath} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurClients;

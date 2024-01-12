import { Box, Grid, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import { messages } from "./config/messages";
import { CLIENT_LOGOS } from "./constants";

const OurClients = () => {
  return (
    <Box bgcolor={COLORS.WHITE} pb={8}>
      <Stack spacing={10} justifyContent="center" alignItems="center" my={6}>
        <Typography
          px={12}
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
        p={2}
        columnGap={2}
        rowGap={2}
      >
        {CLIENT_LOGOS.map((imagePath, id) => (
          <Grid
            key={id}
            item
            sm={5.5}
            xs={5.5}
            md={2.5}
            lg={2.5}
            justifyContent="center"
            alignItems="center"
            // mx={6}
            textAlign="center"
          >
            <img alt="brand_logos" src={imagePath} height={40} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurClients;

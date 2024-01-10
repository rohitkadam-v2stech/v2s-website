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
        pl={2}
        pr={4}
        gap={8}
        bgcolor={COLORS.WHITE}
      >
        {CLIENT_LOGOS.map((imagePath, id) => (
          <Grid
            key={id}
            item
            xs={2}
            justifyContent="center"
            alignItems="center"
            mx={6}
            textAlign="center"
          >
            <img alt="brand_logos" src={imagePath} height={50} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurClients;

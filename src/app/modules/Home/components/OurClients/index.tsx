import { Box, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import { messages } from "./config/messages";

const OurClients = () => {
  return (
    <Box bgcolor={COLORS.WHITE}>
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
    </Box>
  );
};

export default OurClients;

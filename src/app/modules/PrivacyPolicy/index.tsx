import { Box, Stack, Typography } from "@mui/material";

import COLORS from "../../styles/colors";
import data from "./data.json";
import { messages } from "./config/messages";

const PrivacyPolicy = () => (
  <Box mb={3} px={{ xs: 2, sm: 2, md: 10, lg: 22 }}>
    <Typography
      variant="h2"
      fontWeight="bold"
      color={COLORS.DARK_BLUE}
      fontSize="50px"
      my={8}
    >
      {messages.privacyPolicy}
    </Typography>
    <Stack spacing={6}>
      {data.data.map(({ title, description }) => (
        <Stack spacing={1}>
          <Typography fontSize="24px" fontWeight="700">
            {title}
          </Typography>
          <Typography fontSize="16px" textAlign="justify">
            {description}
          </Typography>
        </Stack>
      ))}
    </Stack>
  </Box>
);

export default PrivacyPolicy;

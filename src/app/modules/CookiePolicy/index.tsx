import { Box, Stack, Typography } from "@mui/material";
import COLORS from "../../styles/colors";
import { messages } from "./config/messages";
import CookiePolicyData from "./data.json";

const CookiePolicy = () => (
  <Box mb={3} px={{ xs: 2, sm: 2, md: 10, lg: 16 }}>
    <Typography
      variant="h2"
      fontWeight="bold"
      color={COLORS.DARK_BLUE}
      fontSize="50px"
    >
      {messages.cookiePolicy}
    </Typography>
    {CookiePolicyData.data.map(({ title, points }, mainIndex) => (
      <Box key={mainIndex} my={3}>
        <Typography fontSize="24px" fontWeight="700">
          {`${mainIndex + 1}. ${title}`}
        </Typography>
        <Stack spacing={3}>
          {points.map((point, id) => (
            <Typography key={id} fontSize="16px" textAlign="justify">
              {`${mainIndex + 1}.${id + 1}`} {point}
            </Typography>
          ))}
        </Stack>
      </Box>
    ))}
  </Box>
);

export default CookiePolicy;

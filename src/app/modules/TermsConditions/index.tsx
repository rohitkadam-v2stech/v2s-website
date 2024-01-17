import { Box, Stack, Typography } from "@mui/material";
import TermsAndConditionsData from "./data.json";
import COLORS from "../../styles/colors";
import { messages } from "./config/messages";

const TermsConditions = () => (
  <Box mb={3} px={{ xs: 2, sm: 2, md: 10, lg: 22 }}>
    <Typography
      variant="h2"
      fontWeight="bold"
      color={COLORS.DARK_BLUE}
      fontSize="40px"
      my={8}
    >
      {messages.termsAndConditions}
    </Typography>
    <Stack spacing={6}>
      {TermsAndConditionsData.data.map(({ title, points }, mainIndex) => (
        <Box key={mainIndex}>
          <Typography fontSize="24px" fontWeight="700">
            {`${mainIndex + 1}. ${title}`}
          </Typography>
          <Stack spacing={3}>
            {points.map((point, id) => (
              <Typography key={id} fontSize="16px" textAlign="justify">
                {points.length !== 1 && `${mainIndex + 1}.${id + 1}`} {point}
              </Typography>
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  </Box>
);

export default TermsConditions;

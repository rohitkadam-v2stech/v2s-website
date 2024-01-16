import { Box, Stack, Typography } from "@mui/material";
import RefundPolicyData from "./data.json";
import COLORS from "../../styles/colors";
import { messages } from "./config/messages";

const RefundPolicy = () => {
  return (
    <Box my={3} px={{ xs: 2, sm: 2, md: 18, lg: 22 }}>
      <Typography
        variant="h2"
        fontWeight="bold"
        color={COLORS.DARK_BLUE}
        fontSize="50px"
        my={8}
      >
        {messages.refundPolicy}
      </Typography>
      <Stack spacing={6}>
        {RefundPolicyData.data.map(({ title, description }, id) => (
          <Stack spacing={1} key={id}>
            <Typography fontSize="24px" fontWeight="700">
              {`${id + 1}. ${title}`}
            </Typography>
            {description.map((item, descriptionKey) => (
              <Typography
                key={id}
                fontSize="16px"
                textAlign="justify"
                pl={item.includes("a.") || item.includes("b.") ? 6 : 0}
              >
                {`${item}`}
              </Typography>
            ))}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default RefundPolicy;
